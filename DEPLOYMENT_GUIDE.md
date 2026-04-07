# Deployment Guide: vaibhavpathak.co.in

## Current Secure Setup

This section supersedes the older EmailJS-based instructions further below.

The current project now uses:
- a frontend form that posts to `/api/contact`
- server-side email delivery with Resend
- optional Cloudflare Turnstile bot protection
- Google Analytics loaded from React through `VITE_GA_ID`

### Required Environment Variables

Set these in Vercel or Netlify:

```env
CONTACT_TO_EMAIL=vaibhavpathak.apr@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
RESEND_API_KEY=re_xxxxxxxxx
```

Optional:

```env
VITE_GA_ID=G-XXXXXXXXXX
VITE_TURNSTILE_SITE_KEY=0x4AAAAAAA...
TURNSTILE_SECRET_KEY=0x4AAAAAAA...
```

### Vercel Setup

1. Import the GitHub repo into Vercel.
2. Add the environment variables in `Settings > Environment Variables`.
3. Redeploy the project.
4. Add the custom domain `vaibhavpathak.co.in`.

### Netlify Setup

1. Connect the GitHub repo in Netlify.
2. Use build command `npm run build`.
3. Use publish directory `dist`.
4. Add the environment variables in `Site configuration > Environment variables`.
5. Trigger a new deploy.

### Contact Form Flow

The form is now handled by:
- [Connect.jsx](/d:/Vaibhav%20Website/src/components/Connect.jsx)
- [contact.js](/d:/Vaibhav%20Website/api/contact.js)
- [contact.js](/d:/Vaibhav%20Website/netlify/functions/contact.js)

Do not follow the older `EmailJS` and inline `GA_MEASUREMENT_ID` steps below. Those are outdated.

### Quick Verification

After deployment:
- submit the contact form after waiting at least 3 seconds
- confirm a success message appears
- confirm mail arrives at `CONTACT_TO_EMAIL`
- confirm analytics works only if `VITE_GA_ID` is set
- confirm Turnstile appears only if both Turnstile keys are configured

---

## Step 1: Build Your Site for Production

```bash
cd "d:\Vaibhav Website"
npm run build
```

This creates an optimized `dist/` folder ready for hosting.

---

## Step 2: Choose Your Hosting Provider

### Option A: **Vercel** (Recommended - Easiest)
- **Cost**: Free tier available, paid plans from $20/month
- **Perfect for**: React/Vite projects
- **Deployment**: Push to GitHub→Auto-deploy
- **Benefits**: Automatic SSL, CDN, Analytics

**Steps:**
1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Import your repository
4. Vercel auto-detects Vite → Build settings configured automatically
5. Deploy with one click
6. Connect domain in Vercel dashboard

### Option B: **Netlify**
- **Cost**: Free tier available, paid plans from $19/month
- **Best for**: Static sites & SPAs
- **Deployment**: Git-connected auto-deploy

**Steps:**
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Sign up
3. Connect GitHub repo
4. Configure build: `npm run build` → Publish directory: `dist`
5. Deploy automatically
6. Add domain in Site Settings

### Option C: **AWS/Amplify**
- **Cost**: Free tier, then $0.5-5/month
- **For**: More control needed

### Option D: **Self-Hosted (VPS)**
- **Cost**: $5-20/month (Linode, DigitalOcean, AWS EC2)
- **For**: Maximum control

---

## Step 3: Configure Your Domain

### For **vaibhavpathak.co.in** (Current registrar details needed)

**Find your domain registrar:**
- Where did you purchase `vaibhavpathak.co.in`?
- Common registrars: GoDaddy, Namecheap, BigRock, Google Domains, Route53

**Connect domain to hosting:**

#### **If using Vercel/Netlify:**
1. In Vercel/Netlify dashboard → Project Settings
2. Go to Domains
3. Add your domain: `vaibhavpathak.co.in`
4. Copy the nameservers provided
5. Go to your domain registrar's DNS settings
6. Update nameservers to point to Vercel/Netlify
7. Wait 24-48 hours for DNS propagation

#### **If using custom VPS:**
1. Point domain's nameservers to your VPS provider
2. Configure DNS records (A record → your VPS IP)
3. Set up reverse proxy (Nginx) to serve your app
4. Configure SSL with Let's Encrypt

---

## Step 4: Production Checklist

### Update Configuration Files

**Replace placeholder values:**

```bash
# 1. Replace Google Analytics ID in index.html
# Find: GA_MEASUREMENT_ID
# Replace with: Your actual GA4 ID from Google Analytics

# 2. EmailJS Setup in Connect.jsx
# Get API keys from: https://www.emailjs.com
# Replace:
service_id: 'your_service_id'
template_id: 'your_template_id'  
user_id: 'your_user_id'

# 3. Update meta tags in index.html
# <meta property="og:url" content="https://vaibhavpathak.co.in" />
# Update domain URL
```

### Environment Variables

Create `.env.production` file:

```
VITE_SITE_URL=https://vaibhavpathak.co.in
VITE_EMAIL_SERVICE_ID=your_emailjs_service_id
VITE_EMAIL_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAIL_USER_ID=your_emailjs_user_id
VITE_GA_ID=your_google_analytics_id
```

---

## Step 5: Email Integration (Contact Form)

### Option A: **EmailJS** (Easiest - Recommended)
1. Go to [emailjs.com](https://emailjs.com)
2. Sign up (free tier: 200 emails/month)
3. Create Email Service:
   - Connect your Gmail or custom email
   - Save Service ID
4. Create Email Template:
   - Template name: "contact_form"
   - Save Template ID
5. Get User ID from Account tab
6. Add to `Connect.jsx` in production

### Option B: **SendGrid**
- Professional, $20/month
- 40,000 emails/month free tier

### Option C: **Formspree**
- Simple, free tier available
- No backend needed
- Just change form action: `https://formspree.io/f/YOUR_FORM_ID`

---

## Step 6: Full Deployment Workflow

### **Using Vercel (Recommended)**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Build locally
npm run build

# 3. Deploy to Vercel
vercel --prod

# 4. Or use Git (recommended)
# Push to GitHub → Vercel auto-deploys
git add .
git commit -m "Production ready"
git push origin main
```

**Configure in Vercel Dashboard:**
- Project Settings → Environment Variables
- Add `VITE_*` variables
- Add Domain: `vaibhavpathak.co.in`
- Redeploy

### **Using Netlify**

```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Build
npm run build

# 3. Deploy
netlify deploy --prod --dir=dist
```

---

## Step 7: SSL Certificate (HTTPS)

✅ **Vercel/Netlify**: Automatic free SSL to all domains
✅ **LetsEncrypt**: Free SSL for custom servers
❌ Don't need to worry about this - it's automatic!

---

## Step 8: Post-Deployment Checklist

After deploying, verify:

- [ ] Website loads on `https://vaibhavpathak.co.in`
- [ ] No mixed content warnings (HTTP vs HTTPS)
- [ ] All images load correctly
- [ ] Navigation links work
- [ ] Contact form sends emails
- [ ] Mobile responsive
- [ ] Google Analytics tracking works
- [ ] Meta tags showing correctly on social share preview

**Test social share preview:**
- Go to Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Enter your URL
- Verify meta tags display correctly

---

## Step 9: Performance Optimization (Post-Deploy)

Enable these for better performance:

1. **Caching**
   - Vercel: Automatic
   - Netlify: Add `_headers` file

2. **Image Optimization**
   - Consider using WebP format
   - Add `next/image` alternative

3. **Minification**
   - Vite does this automatically

4. **CDN**
   - Vercel/Netlify: Included globally
   - AWS: CloudFront

---

## Quick Start: Recommended Path

**Fastest deployment (5 minutes):**

1. **Verify build works:**
   ```bash
   npm run build
   ```

2. **Sign up for Vercel** (free): https://vercel.com

3. **Connect GitHub:**
   - Push code to GitHub
   - Import repo to Vercel
   - Vercel auto-configures everything

4. **Add domain:**
   - Vercel → Settings → Domains → Add `vaibhavpathak.co.in`
   - Update domain registrar's nameservers to Vercel's
   - Wait 24-48 hours for DNS

5. **Set up email:**
   - Get EmailJS API keys
   - Update `.env` or hardcode in Connect.jsx for now
   - Test contact form

6. **Analytics:**
   - Google Analytics account → Get Measurement ID
   - Update GA_ID in index.html

---

## Troubleshooting

**Domain not resolving?**
- DNS can take 24-48 hours
- Check nameserver propagation: https://www.whatsmydns.net

**Contact form not sending?**
- Check EmailJS credentials are correct
- Check browser console for errors
- Verify email service quota not exceeded

**Static files not loading?**
- Check buildtarget: `dist/` folder should exist
- Verify path configuration in Vite

**SSL certificate errors?**
- Vercel/Netlify: Automatic, no action needed
- Wait up to 24 hours for certificate generation

---

## Need More Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

