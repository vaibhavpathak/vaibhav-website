const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LENGTHS = {
  name: 80,
  email: 160,
  subject: 140,
  message: 4000
}

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

async function verifyTurnstileToken(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY

  if (!secret) {
    return true
  }

  if (!token) {
    return false
  }

  const params = new URLSearchParams({
    secret,
    response: token
  })

  if (ip) {
    params.set('remoteip', ip)
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  })

  if (!response.ok) {
    return false
  }

  const result = await response.json()
  return Boolean(result.success)
}

function validatePayload(payload) {
  const name = sanitize(payload.name)
  const email = sanitize(payload.email)
  const subject = sanitize(payload.subject)
  const message = sanitize(payload.message)
  const website = sanitize(payload.website)
  const turnstileToken = sanitize(payload.turnstileToken)
  const formStartedAt = Number(payload.formStartedAt)

  if (website) {
    return { ok: false, status: 400, message: 'Spam detected.' }
  }

  if (!Number.isFinite(formStartedAt) || Date.now() - formStartedAt < 3000) {
    return { ok: false, status: 400, message: 'Form submitted too quickly.' }
  }

  if (!name || !email || !subject || !message) {
    return { ok: false, status: 400, message: 'All fields are required.' }
  }

  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, status: 400, message: 'Please enter a valid email address.' }
  }

  if (name.length > MAX_LENGTHS.name || email.length > MAX_LENGTHS.email || subject.length > MAX_LENGTHS.subject || message.length > MAX_LENGTHS.message) {
    return { ok: false, status: 400, message: 'One or more fields exceed the allowed length.' }
  }

  return {
    ok: true,
    data: {
      name,
      email,
      subject,
      message,
      turnstileToken
    }
  }
}

async function sendEmail({ name, email, subject, message }) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

  if (!apiKey || !to) {
    return { ok: false, status: 503, message: 'Contact service is not configured yet.' }
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    })
  })

  if (!response.ok) {
    return { ok: false, status: 502, message: 'Unable to deliver your message right now.' }
  }

  return { ok: true }
}

export default async function handler(request, response) {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('Cache-Control', 'no-store')

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  try {
    const payload = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : (request.body || {})
    const validation = validatePayload(payload)

    if (!validation.ok) {
      return response.status(validation.status).json({ error: validation.message })
    }

    const ip = request.headers['x-forwarded-for']?.split(',')[0]?.trim()
    const turnstilePassed = await verifyTurnstileToken(validation.data.turnstileToken, ip)

    if (!turnstilePassed) {
      return response.status(400).json({ error: 'Bot verification failed.' })
    }

    const delivery = await sendEmail(validation.data)

    if (!delivery.ok) {
      return response.status(delivery.status).json({ error: delivery.message })
    }

    return response.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return response.status(500).json({ error: 'Unexpected server error.' })
  }
}
