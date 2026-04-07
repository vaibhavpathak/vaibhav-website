# Production Deployment Checklist

## Pre-Deployment (This Week)

### 1. **Domain & Hosting Setup**
- [ ] Verify you own `vaibhavpathak.co.in`
- [ ] Identify current domain registrar (GoDaddy, Namecheap, etc.)
- [ ] Decide hosting: Vercel (recommended), Netlify, or custom VPS
- [ ] Create account on chosen hosting platform

### 2. **Email Service Setup**
- [ ] Create EmailJS account (https://emailjs.com)
- [ ] Set up email service (connect Gmail or business email)
- [ ] Create email template for contact form
- [ ] Copy Service ID, Template ID, User ID
- [ ] Test with dummy submission

### 3. **Analytics Setup**
- [ ] Create Google Analytics 4 account (https://analytics.google.com)
- [ ] Create property for `vaibhavpathak.co.in`
- [ ] Copy Measurement ID (starts with G-)
- [ ] Save for later configuration

### 4. **Code Updates**
- [ ] Update EmailJS credentials in `src/components/Connect.jsx`
- [ ] Update GA Measurement ID in `index.html`
- [ ] Update meta tag domain in `index.html` to `vaibhavpathak.co.in`
- [ ] Review all hardcoded URLs (change localhost references)
- [ ] Test contact form locally works

### 5. **Security Checklist**
- [ ] No sensitive API keys in public code (use .env)
- [ ] All external links use HTTPS
- [ ] Form validation works
- [ ] No console errors on local build preview

---

## Deployment Day

### Step 1: Final Build Test
```bash
npm run build
npm run preview  # Test production build locally
```
- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Click test: Links, buttons, forms work
- [ ] Mobile test: Responsive design intact

### Step 2: Deploy to Hosting
**Choose your path:**

#### **Path A: Vercel (Recommended)**
```bash
# Push to GitHub first
git add .
git commit -m "Ready for production"
git push origin main

# Then in Vercel dashboard:
# 1. Import GitHub repo
# 2. Vercel auto-configures build
# 3. Deploy → Done
```

#### **Path B: Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### **Path C: Manual (require more steps)**
- Upload `dist/` folder to hosting provider
- Configure web server to serve `dist/index.html` for client-side routing

### Step 3: Connect Domain
- [ ] Go to hosting dashboard
- [ ] Add domain: `vaibhavpathak.co.in`
- [ ] Copy nameservers
- [ ] Log into domain registrar
- [ ] Update nameservers (or move to hosting provider's registrar)
- [ ] **Note**: DNS takes 24-48 hours to propagate

### Step 4: Configure Environment
In hosting dashboard → Settings → Environment Variables:
- [ ] Add `VITE_GA_ID` = Your Google Analytics ID
- [ ] Trigger redeploy after adding variables

---

## Post-Deployment (Verification)

### Day 1 (DNS Propagation)
- [ ] Check DNS propagation: https://www.whatsmydns.net
- [ ] Enter: vaibhavpathak.co.in

### When DNS Works (Usually 24-48 hours)
- [ ] **HTTPS works**: https://vaibhavpathak.co.in loads
- [ ] **No SSL warnings**: No padlock issues
- [ ] **Homepage loads**: All sections visible
- [ ] **Images load**: No 404 errors in console
- [ ] **Contact form works**:
  - Type test message
  - Submit
  - Check email inbox
  - Verify email arrives
- [ ] **Navigation works**: All anchor links (#about, #expertise, etc.)
- [ ] **Mobile works**: Test on phone/tablet
- [ ] **Analytics tracking**: 
  - Open in Chrome DevTools → Network
  - Check for gtag requests
  - Wait 24h, then check Google Analytics dashboard

### Google Search Console
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add property: `https://vaibhavpathak.co.in`
- [ ] Verify ownership (add DNS record or HTML file)
- [ ] Submit sitemap: `https://vaibhavpathak.co.in/sitemap.xml` (generate if needed)
- [ ] Monitor for indexing issues

### Social Media Preview
- [ ] Test Twitter: https://twitter.com/intent/tweet?url=https://vaibhavpathak.co.in
- [ ] Test LinkedIn: Share in LinkedIn
- [ ] Verify title, description, image show correctly
- [ ] Use [Facebook Debug Tool](https://developers.facebook.com/tools/debug/)

---

## Optional Enhancements (Week 2+)

### Analytics & Optimization
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Create XML sitemap
- [ ] Add robots.txt
- [ ] Monitor analytics for user behavior

### Email Optimization
- [ ] Switch to SendGrid for professional email (if volume high)
- [ ] Set up email forwarding for notifications
- [ ] Create email template branded version

### Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images (compress, WebP format)
- [ ] Test page load time
- [ ] Enable caching headers

### Content
- [ ] Publish actual blog articles (currently just stubs)
- [ ] Add LinkedIn/social follow buttons
- [ ] Create actual resources for lead magnets

---

## Rollback Plan (If Something Goes Wrong)

If site breaks after deployment:
1. Rollback to previous version in hosting dashboard (2-click)
2. Or push previous Git commit → automatic redeploy
3. Check error logs in hosting provider's dashboard
4. Most issues are configuration (not code)

---

## Support Resources

**By Platform:**
- Vercel help: https://vercel.com/support
- Netlify help: https://support.netlify.com
- EmailJS: https://www.emailjs.com/docs
- Google Analytics: https://support.google.com/analytics

**Testing Tools:**
- SSL Checker: https://www.sslshopper.com/ssl-checker.html
- Page Speed: https://pagespeed.web.dev
- Domain Checker: https://www.whatsmydns.net
- Response Headers: https://www.webpagetest.org

