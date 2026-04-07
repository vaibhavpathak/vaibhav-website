# Deploy to vaibhavpathak.co.in - Quick Setup

## 🚀 Fastest Path (Vercel - Recommended)

### 1. **Prerequisites** (5 minutes)
```bash
# Ensure everything builds locally first
npm run build
npm run preview
```

### 2. **Push to GitHub** (2 minutes)
```bash
git add .
git commit -m "Production ready deployment"
git push origin main
```

### 3. **Set Up Vercel** (3 minutes)
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Import your repository
3. Click Deploy
4. **Copy your Vercel domain** (e.g., `my-project.vercel.app`)

### 4. **Connect Domain** (5 minutes + 24-48h DNS)
1. In Vercel dashboard → Settings → Domains
2. Add domain: `vaibhavpathak.co.in`
3. Vercel shows nameserver instructions
4. Log into your domain registrar
5. Replace nameservers with Vercel's
6. Wait 24-48 hours for DNS to propagate

### 5. **Set Up Email** (5 minutes)
1. Go to [emailjs.com](https://emailjs.com) → Sign up
2. Connect your email (Gmail or business)
3. Copy: `Service ID`, `Template ID`, `User ID`
4. Update `src/components/Connect.jsx`:
   ```javascript
   // Line ~50, replace with your actual IDs:
   service_id: 'service_xyz123',
   template_id: 'template_xyz123',
   user_id: 'user_xyz123',
   ```
5. Push changes: `git push`
6. Vercel auto-redeploys

### 6. **Set Up Analytics** (5 minutes)
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property for `vaibhavpathak.co.in`
3. Copy `Measurement ID` (starts with G-)
4. In `index.html`, replace `GA_MEASUREMENT_ID` with your ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
   ```
5. Push changes: `git push`

### 7. **Verify** (Ongoing)
Once DNS propagates (24-48h):
- [ ] Visit `https://vaibhavpathak.co.in` → loads
- [ ] Fill contact form → email arrives in inbox
- [ ] Check Google Analytics → traffic shows up
- [ ] Test on mobile → responsive
- [ ] Check console → no errors

---

## 📋 Full Deployment Guide

See detailed steps in [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 🆘 Troubleshooting

### "Domain not resolving"
- DNS changes take 24-48 hours
- Check status: https://www.whatsmydns.net → Enter your domain

### "Contact form not sending"
- Check EmailJS credentials in Connect.jsx
- Check browser console for errors: F12 → Console tab
- Verify EmailJS quota not exceeded

### "White screen on production"
- Check Vercel build logs: Dashboard → Deployments
- Check browser console for JavaScript errors: F12 → Console

### "Images not loading"
- Ensure all image paths are correct
- Use relative paths, not absolute

---

## 🔑 Environment Variables

If using environment variables, add in Vercel Dashboard:
- Settings → Environment Variables
- Add each variable, then redeploy

Example:
- `VITE_GA_ID` = `G-XXXXXX`
- `VITE_EMAIL_SERVICE_ID` = (if using .env instead of hardcoding)

---

## 📊 Next Steps

After going live:
1. **Submit to Google**: [Google Search Console](https://search.google.com/search-console)
2. **Monitor analytics**: Watch for traffic, scroll depth, conversions
3. **Content updates**: Publish real blog articles
4. **Lead tracking**: Monitor contact form submissions
5. **SEO**: Check search rankings in Google Search Console

---

## 💡 Pro Tips

- **Automatic redeploy**: Every `git push` to main auto-deploys
- **Preview URLs**: Every PR gets automatic preview deployment
- **Rollback**: One-click rollback to previous version in Vercel
- **Free SSL**: Automatic HTTPS certificate, no extra cost
- **CDN**: Global CDN included, users get fast load times worldwide

---

## Questions?

- **Vercel Docs**: https://vercel.com/docs
- **Vite Guide**: https://vitejs.dev/guide/static-deploy.html
- **EmailJS Guide**: https://www.emailjs.com/docs

Good luck! 🎉

