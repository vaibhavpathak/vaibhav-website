# Deployment Guide

## Quick Start Deployments

### 1. Vercel (RECOMMENDED - Zero Configuration)

Vercel is the creators of Next.js and works perfectly with Vite + React.

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import this GitHub repository (or create one)
4. Vercel auto-detects Vite as build tool
5. Click Deploy

**Custom Domain:**
1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain (e.g., vaibhavpathak.com)
3. Update DNS records in your domain registrar

**Environment Variables:**
1. Settings > Environment Variables
2. Add any `.env` variables needed

---

### 2. Netlify

**Via CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Via Web Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

---

### 3. GitHub Pages

**Requirements:**
- Replace `https://linkedin.com/in/vaibhavpathak` with your actual LinkedIn URL in components
- Go to repo Settings > Pages > Source: Deploy from branch

**Setup:**
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/', // If using project site
  // or leave empty for user site
})
```

2. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

### 4. AWS S3 + CloudFront

**Setup:**
1. Create S3 bucket: `vaibhavpathak.com`
2. Enable static website hosting
3. Create CloudFront distribution pointing to S3

**Deploy:**
```bash
npm run build
aws s3 sync dist/ s3://vaibhavpathak.com --delete
aws cloudfront create-invalidation --distribution-id ID --paths "/*"
```

---

### 5. Firebase Hosting

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init`
3. Select Hosting
4. Public directory: `dist`
5. Build command: `npm run build`
6. Deploy: `firebase deploy`

---

### 6. Docker Deployment

**Create `Dockerfile`:**
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build & Run:**
```bash
docker build -t vaibhav-portfolio .
docker run -p 3000:3000 vaibhav-portfolio
```

---

## Post-Deployment Checklist

### ✅ Basic Setup
- [ ] Test site loads correctly
- [ ] Test mobile responsiveness
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test social media links

### ✅ SEO & Analytics
- [ ] Add Google Analytics 4
- [ ] Add Google Search Console
- [ ] Submit sitemap to Google
- [ ] Add schema.org markup
- [ ] Create robots.txt
- [ ] Create sitemap.xml

### ✅ Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images
- [ ] Enable gzip compression
- [ ] Set up CDN
- [ ] Test page speed (PageSpeed Insights)

### ✅ Security
- [ ] Enable HTTPS/SSL
- [ ] Set security headers
- [ ] Enable HSTS
- [ ] Test for vulnerabilities
- [ ] Set up CORS if needed

### ✅ Monitoring
- [ ] Set up error tracking
- [ ] Enable uptime monitoring
- [ ] Set up alerts
- [ ] Monitor analytics

---

## Domain Setup

### Register Domain
- GoDaddy, Namecheap, Google Domains, Route53

### Change DNS Records

**For Vercel:**
1. Copy Vercel nameservers from dashboard
2. Update nameservers at registrar (or add CNAME)
3. Wait 24-48 hours for propagation

**For Netlify:**
Similar to Vercel - follow their DNS setup guide

**For GitHub Pages:**
Add A records or CNAME depending on setup type

---

## Email Integration for Contact Form

### Option A: EmailJS (Client-side, Free)
```bash
npm install @emailjs/browser
```

Update `src/components/Contact.jsx`:
```javascript
import emailjs from '@emailjs/browser'

// Initialize in useEffect
useEffect(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
}, [])

// Handle submit
const handleSubmit = (e) => {
  e.preventDefault()
  
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formData
  ).then(...).catch(...)
}
```

### Option B: Formspree (Simple)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

### Option C: SendGrid (Backend)
```bash
npm install @sendgrid/mail
```

Create backend endpoint to handle form submission.

---

## SSL Certificate

**Vercel/Netlify:** Automatic (Let's Encrypt)

**Self-hosted:**
- Use Let's Encrypt (free)
- Use Certbot with nginx
- Use AWS Certificate Manager

---

## Monitoring & Maintenance

### Essential Tools
1. **Google Analytics** - Traffic monitoring
2. **Sentry** - Error tracking
3. **Uptime Robot** - Uptime monitoring
4. **Google Search Console** - SEO insights

### Regular Tasks
- [ ] Check analytics monthly
- [ ] Update content quarterly
- [ ] Update certifications when new ones are added
- [ ] Update experience when role changes
- [ ] Monitor error reports weekly
- [ ] Update dependencies monthly

---

## Troubleshooting

### Site not loading
- Check DNS propagation: `nslookup yourdomain.com`
- Verify build was successful: `npm run build`
- Check logs in hosting platform

### Contact form not working
- Verify email service credentials
- Check environment variables
- Test locally: `npm run dev`
- Check browser console for errors

### Performance issues
- Run Lighthouse audit
- Enable compression
- Optimize images
- Enable caching
- Use CDN

---

## Rolling Back Deployment

**Vercel:** Click "Deployments" > Select previous > "Promote to Production"

**Netlify:** Click "Deploys" > Select previous > "Publish deploy"

**GitHub Pages:** Revert commit and push

---

## Questions or Issues?

Consult the hosting platform's documentation or reach out to support.
