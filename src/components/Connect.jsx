import React, { useEffect, useRef, useState } from 'react'
import { trackEvent } from './Analytics'

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

export default function Connect() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now())
  const [turnstileToken, setTurnstileToken] = useState('')
  const widgetContainerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: ''
  })

  useEffect(() => {
    if (!turnstileSiteKey || typeof window === 'undefined') {
      return undefined
    }

    const renderWidget = () => {
      if (!window.turnstile || !widgetContainerRef.current || widgetIdRef.current !== null) {
        return
      }

      widgetIdRef.current = window.turnstile.render(widgetContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: 'dark',
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken('')
      })
    }

    if (window.turnstile) {
      renderWidget()
      return undefined
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = renderWidget
    document.head.appendChild(script)

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [])

  const handleInputChange = (e) => {
    setErrorMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(false)
    setErrorMessage('')

    if (turnstileSiteKey && !turnstileToken) {
      setErrorMessage('Please complete the verification challenge before sending your message.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formStartedAt,
          turnstileToken
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '', website: '' })
        setFormStartedAt(Date.now())
        setTurnstileToken('')
        if (widgetIdRef.current !== null && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current)
        }
        trackEvent('form_submission', {
          form_type: 'contact',
          subject: formData.subject
        })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setErrorMessage(error.message || 'Unable to send your message right now.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="connect" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Connect</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Let's stay in touch. Follow my work, share thoughts on governance and compliance, or discuss challenges you're navigating.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Direct Connections */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Direct Channels</h3>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">Email</h4>
                <a href="mailto:vaibhavpathak.apr@gmail.com" className="text-blue-400 hover:text-blue-300 font-semibold">
                  vaibhavpathak.apr@gmail.com
                </a>
                <p className="text-sm text-gray-400 mt-1">For direct conversation</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.804h3.554v1.391c-.009.015-.023.029-.032.042h.032v-.042c.431-.666 1.199-1.616 2.922-1.616 2.135 0 3.731 1.395 3.731 4.397v5.632zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.954-1.715 1.187 0 1.915.76 1.932 1.715 0 .953-.745 1.715-1.971 1.715zm-2.083 11.597h3.554V9.504H3.254v10.948zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/vaibhav-pathak-ccsp-50263a1b" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">
                  /in/vaibhav-pathak-ccsp-50263a1b
                </a>
                <p className="text-sm text-gray-400 mt-1">For professional updates and content</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">Location</h4>
                <p className="text-purple-300 font-semibold">Noida, India</p>
                <p className="text-sm text-gray-400 mt-1">Based in the NCR region</p>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-green-300">Message received</p>
                  <p className="text-sm text-green-400">Thanks for reaching out. I'll respond shortly.</p>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="font-semibold text-red-300">Message not sent</p>
                <p className="text-sm text-red-400 mt-1">{errorMessage}</p>
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-blue-500/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-blue-500/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-blue-500/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="What would you like to discuss?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-blue-500/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Share your thoughts or questions..."
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>

              {turnstileSiteKey && (
                <div>
                  <p className="text-sm font-semibold text-gray-300 mb-2">Verification</p>
                  <div ref={widgetContainerRef} />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Why Connect */}
        <div className="mt-16 pt-12 border-t border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">Why Connect?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-blue-400 mb-2">Share Expertise</p>
              <p className="text-gray-300">Discuss governance challenges, compliance strategy, cloud security, or emerging AI governance topics where I can add perspective.</p>
            </div>
            <div>
              <p className="font-semibold text-blue-400 mb-2">Collaborate</p>
              <p className="text-gray-300">Explore collaborative opportunities in GRC, compliance programs, or training & knowledge sharing in areas of shared interest.</p>
            </div>
            <div>
              <p className="font-semibold text-blue-400 mb-2">Stay Updated</p>
              <p className="text-gray-300">Follow my work on LinkedIn for updates on compliance, governance, cloud security, and emerging perspectives on AI governance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
