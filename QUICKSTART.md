# Quick Start Guide

## 5 Minutes to Launch

### Step 1: Install Dependencies (1 min)
```bash
cd "Vaibhav Website"
npm install
```

### Step 2: Customize Content (2 min)
Edit these files with your actual information:

1. **src/components/Hero.jsx** - Update headline, metrics
2. **src/components/About.jsx** - Update bio and stats
3. **src/components/Experience.jsx** - Add your roles
4. **src/components/Certifications.jsx** - Update credentials
5. **src/components/Contact.jsx** - Update email, LinkedIn
6. **src/components/Footer.jsx** - Update social links

### Step 3: Run Locally (1 min)
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000)

### Step 4: Deploy (1 min setup + DNS)
Choose one hosting option:

**EASIEST - Vercel:**
```bash
npm run build
# Then drag dist folder to vercel.com
```

**OR - Netlify:**
```bash
npm run build
# Then drag dist folder to netlify.com
```

---

## Content Customization Checklist

### Must Update (High Priority)
- [ ] Your name and headline in all sections
- [ ] Email address in Contact section
- [ ] LinkedIn profile link
- [ ] Add your actual roles and companies
- [ ] Add your real certifications
- [ ] Update statistics/metrics

### Should Update (Medium Priority)
- [ ] Professional photo if design allows
- [ ] Your actual expertise areas
- [ ] Real publications if available
- [ ] Speaking engagements you've done
- [ ] Thought Leadership articles

### Nice to Have (Low Priority)
- [ ] Brand colors (if not blue)
- [ ] Additional pages
- [ ] Blog section
- [ ] Case studies
- [ ] Video introductions

---

## File-by-File Customization

### 1. src/components/Hero.jsx
```javascript
// Update these lines:
<span className="px-4 py-2...">
  Cyber GRC • Risk Management • Governance  {/* Change focus areas */}
</span>

<h1>
  <span className="text-gradient">Strategic Governance</span>
  <br>
  for the Digital Enterprise  {/* Your unique value prop */}
</h1>

<p>
  Expert in Cyber Risk & Compliance Strategy | Privacy & Data Protection | Cloud Security Governance | Responsible AI Leadership
  {/* Your key specializations */}
</p>

// Update stats:
<div className="text-2xl font-bold text-blue-400 mb-2">15+ Years</div>
<div className="text-sm text-slate-400">Experience</div>
```

### 2. src/components/About.jsx
```javascript
// Replace the paragraphs with your bio
<p className="text-lg text-slate-300 mb-6 leading-relaxed">
  As a strategic Cyber GRC and Risk Management executive...
</p>

// Update expertise list
<li className="flex items-start">
  <span className="text-blue-400 mr-3 mt-1">✓</span>
  <span className="text-slate-300">Cyber GRC Architecture</span>
</li>

// Update stats grid
<div>
  <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
  <div className="text-sm text-slate-400">Organizations Guided</div>
</div>
```

### 3. src/components/Experience.jsx
```javascript
// Update the experiences array:
const experiences = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    period: 'Dates',
    highlights: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
      'Achievement 4'
    ]
  },
  // Add more roles
]
```

### 4. src/components/Expertise.jsx
```javascript
// Update expertise areas:
const expertiseAreas = [
  {
    icon: '🔐',
    title: 'Your Expertise Area',
    description: 'Description of your expertise...'
  },
  // Add or remove as needed
]

// Update tech skills:
{['Skills', 'Tags', 'Here'].map((tech) => (
  <div key={tech} className="...">
    {tech}
  </div>
))}
```

### 5. src/components/Certifications.jsx
```javascript
// Update certifications array:
const certifications = [
  {
    title: 'Your Certification Name',
    issuer: 'Issuing Organization',
    focus: 'Focus Area'
  },
  // Add your real certs
]
```

### 6. src/components/ThoughtLeadership.jsx
```javascript
// Update articles:
const articles = [
  {
    title: 'Article Title',
    publication: 'Publication Name',
    date: 'Month Year',
    summary: 'Brief description'
  },
  // Add your articles
]

// Update speaking engagements:
const speakingEngagements = [
  'Conference Name - Topic',
  'Event Name - Year'
]
```

### 7. src/components/Contact.jsx
```javascript
// Update email:
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// Update LinkedIn:
<a href="https://linkedin.com/in/yourprofile">
  Connect with me
</a>

// Update resume link (when you have one):
<a href="https://your-resume-url.pdf">
  Download CV
</a>
```

### 8. Footer & Other Links
- Update LinkedIn URLs
- Update email addresses
- Update any external links

---

## Testing Checklist

```bash
# Local testing
npm start

# In browser, check:
[ ] Navigation links work
[ ] Mobile menu works (resize to <640px)
[ ] All sections visible and styled correctly
[ ] Buttons have hover effects
[ ] Text is readable with good contrast
[ ] Images load (if added)
[ ] Form inputs focus correctly
[ ] Links point to correct places
```

---

## Build & Deploy

### Build for Production
```bash
npm run build
```
Creates optimized `dist/` folder

### Test Production Build Locally
```bash
npm run preview
```
Shows how site will look when deployed

### Deploy Options

**Option 1: Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

**Option 2: Netlify**
- Drag `dist/` folder to [netlify.com](https://netlify.com)

**Option 3: GitHub Pages**
```bash
# Push to GitHub
# Enable GitHub Pages in repo settings
# Select 'dist' folder as source
```

---

## Need Help?

### Common Issues

**npm ERR! code ERESOLVE**
```bash
npm install --legacy-peer-deps
```

**Port 3000 already in use**
```bash
# Change port in vite.config.js or use different port
npm start -- --port 3001
```

**Build fails**
```bash
# Clear cache and retry
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Next Steps After Launch

1. ✅ Update resume with link
2. ✅ Set up analytics (Google Analytics 4)
3. ✅ Integrate email form (EmailJS, Formspree, etc.)
4. ✅ Add custom domain
5. ✅ Set up SSL certificate (automatic on most platforms)
6. ✅ Submit to Google Search Console
7. ✅ Monitor performance with Lighthouse
8. ✅ Promote on LinkedIn
9. ✅ Update LinkedIn profile to link to website
10. ✅ Monitor form submissions and analytics

---

## Need to Make Changes?

After deployment, to make changes:

1. Edit files locally
2. Test: `npm start`
3. Build: `npm run build`
4. Redeploy (varies by platform):
   - Vercel: Auto-deploys on push
   - Netlify: Auto-deploys on push
   - GitHub Pages: Push to main branch
   - Manual: Upload `dist/` folder

---

## Performance Tips

- ✅ Images are optimized
- ✅ Code is minified in production
- ✅ CSS is purged of unused styles
- ✅ Page loads in <2 seconds on 4G
- ✅ Mobile and desktop friendly
- ✅ SEO optimized (basic)

Check with Lighthouse:
```bash
npm run build
npm run preview
# Open DevTools > Lighthouse > Analyze page load
```

---

Happy launching! 🚀
