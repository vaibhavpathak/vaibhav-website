# Customization Reference Guide

Use your resume to populate these exact fields in the website. This guide maps resume sections to website components.

## Resume → Website Field Mapping

### Personal Information
- **Email**: Contact section
- **LinkedIn**: Header, Footer, Contact section
- **Phone**: Optional in Contact section
- **Location**: Optional in About section

### Professional Summary
- **Your Executive Bio**: About section (3-4 paragraphs)
- **Key Competencies**: Expertise section (6 areas)
- **Unique Value Proposition**: Hero section headline

### Career History
For each role in your resume, add to Experience section:

```javascript
{
  role: 'Job Title',
  company: 'Company Name', 
  period: 'Start–End or Current',
  highlights: [
    'Major achievement 1',
    'Major achievement 2',
    'Major achievement 3',
    'Major achievement 4'
  ]
}
```

**Tips:**
- Use action verbs (Led, Built, Implemented, Designed)
- Focus on impact and metrics
- Include 3-5 key highlights per role
- Order by recency or relevance

### Education
- **Degree**: Can be added as separate section or in About
- **University**: Same

### Certifications & Credentials

Add each to Certifications section:

```javascript
{
  title: 'Full Certification Name',
  issuer: 'Issuing Organization',
  focus: 'Primary focus area'
}
```

**Where to find:**
- Professional designations
- Industry certifications (CISSP, CISM, CDPO, etc.)
- Courses and specializations
- Academic credentials if relevant

### Skills & Expertise

Extract 3-6 main expertise areas for Expertise section:

```javascript
{
  icon: '🔐',  // Use relevant emoji
  title: 'Expertise Name',
  description: 'Detailed 1-2 sentence description'
}
```

Then add 12-18 technical proficiencies tags (frameworks, tools, methodologies, standards)

### Publications & Speaking

**For Thought Leadership section:**

Publications:
```javascript
{
  title: 'Article Title',
  publication: 'Publication Name',
  date: 'Month Year',
  summary: 'What the article is about'
}
```

Speaking:
```javascript
const speakingEngagements = [
  'Conference Name - Topic or Year',
  'Event Name - Speaking Role'
]
```

### Awards & Recognition

Add to appropriate sections:
- Industry awards → Thought Leadership
- Certifications → Certifications
- Leadership roles → Experience highlights

### Quantifiable Metrics

Add to About section statistics:
- Years of experience
- Number of certifications
- People led / team size
- Organizations/clients served
- Budget managed
- Projects delivered
- Publications / speaking engagements

---

## Component-by-Component Customization

### Header (src/components/Header.jsx)
No changes needed - automatically responsive

### Hero (src/components/Hero.jsx)

Replace these:
```javascript
// Badge
<span>Cyber GRC • Risk Management • Governance</span>
// → Change to your focus areas

// Headline
<h1>Strategic Governance for the Digital Enterprise</h1>
// → Your compelling headline

// Subheadline  
<p>Expert in Cyber Risk & Compliance Strategy | Privacy & Data Protection | Cloud Security Governance | Responsible AI Leadership</p>
// → Your key expertise areas

// Statistics
<div className="text-2xl font-bold text-blue-400 mb-2">15+ Years</div>
<div className="text-sm text-slate-400">Experience</div>
// → Your actual metrics
```

### About (src/components/About.jsx)

Replace:
```javascript
// Paragraph 1 - Executive bio
<p className="text-lg text-slate-300 mb-6">
  As a strategic Cyber GRC and Risk Management executive...
</p>
// → Your professional background (150-200 words)

// Paragraph 2 - What you do
<p className="text-lg text-slate-300 mb-6">
  My work focuses on designing resilient governance...
</p>
// → Your focus areas (100-150 words)

// Paragraph 3 - Your passion
<p className="text-lg text-slate-300">
  I'm passionate about developing governance leaders...
</p>
// → Your philosophy/approach (100 words)

// Expertise bullets (Core Expertise box)
<li><span className="text-slate-300">Cyber GRC Architecture</span></li>
// → Your key expertise areas (6 items)

// Statistics grid
<div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
<div className="text-sm text-slate-400">Organizations Guided</div>
// → Your actual metrics (6 stats)
```

### Expertise (src/components/Expertise.jsx)

Replace the `expertiseAreas` array (6 items):
```javascript
const expertiseAreas = [
  {
    icon: '🔐',  // Relevant emoji
    title: 'Area Name',
    description: 'What you do in this area - 1-2 sentences describing impact and approach'
  },
  // Repeat 6 times
]
```

Replace technology tags (~16 items):
```javascript
{['ISO 27001', 'GDPR', 'DPDP', 'SOC 2', ...].map((tech) => (
  // Your actual standards, frameworks, methodologies, tools
))}
```

### Experience (src/components/Experience.jsx)

Replace `experiences` array with your career progression:
```javascript
const experiences = [
  {
    role: 'Chief Information Security Officer (CISO)',
    company: 'Global Fortune 500 Enterprise',
    period: 'Current or Date Range',
    highlights: [
      'Key accomplishment with metrics',
      'Major initiative and impact',
      'Leadership achievement',
      'Strategic advancement'
    ]
  },
  // Add all major roles (typically 3-5)
]
```

**Tips:**
- Most recent first
- Include 3-5 key points per role
- Use metrics where possible
- Focus on impact, not tasks

### Certifications (src/components/Certifications.jsx)

Replace `certifications` array:
```javascript
const certifications = [
  {
    title: 'Full Name of Certification',
    issuer: 'Issuing Organization Name',
    focus: 'Primary Focus Area'
  },
  // Add all relevant certs (typically 5-10)
]
```

Replace learning highlights:
```javascript
<li className="flex items-start">
  <span className="text-blue-400 mr-3">✓</span>
  <span>What you contribute to industry (speaking, mentoring, standards)</span>
</li>
```

### Thought Leadership (src/components/ThoughtLeadership.jsx)

Articles array:
```javascript
const articles = [
  {
    title: 'Your Article Title',
    publication: 'Publication Name (HBR, Forbes, LinkedIn, etc)',
    date: 'Q or Month Year',
    summary: 'What the article covers (1 sentence)'
  },
  // Add published pieces (2-6)
]
```

Speaking engagements:
```javascript
const speakingEngagements = [
  'Conference Name - Topic or Role',
  'Event Name - Year or Topic',
  // Add relevant speaking engagements (4-8)
]
```

### Contact (src/components/Contact.jsx)

Critical updates:
```javascript
// Email
<a href="mailto:YOUR.EMAIL@example.com">
  YOUR.EMAIL@example.com
</a>

// LinkedIn  
<a href="https://linkedin.com/in/YOUR-PROFILE-URL">
  Connect with me
</a>

// Resume download
<a href="YOUR-RESUME-URL.pdf">
  Download CV
</a>

// Availability note
<p className="text-slate-300">
  Available for [your availability - CISO roles, consulting, board positions, etc]
</p>
```

### Footer (src/components/Footer.jsx)

Update links:
```javascript
{/* LinkedIn */}
<a href="https://linkedin.com/in/YOUR-PROFILE">

{/* Email */}
<a href="mailto:YOUR.EMAIL@example.com">
```

---

## Writing Tips for Each Section

### Headlines (Hero)
- Lead with your unique value
- Action-oriented
- Specific to your domain
- 6-10 words maximum

Examples:
- "Strategic Governance for the Digital Enterprise"
- "Enterprise Risk Leadership That Enables Innovation"
- "Building Resilient Security & Compliance Cultures"

### Bio (About)
**Structure:**
1. **Background**: Years of experience, main title, scope
2. **Specialty**: What you're known for, unique angle
3. **Impact**: What you've achieved, philosophy

### Expertise Areas
**Structure:**
- Title: Specific capability area (not "Security" but "Cloud Security Governance")
- Description: What you do, who benefits, impact (2 sentences max)

### Experience Highlights
**Structure:**
- Action verb + achievement + metrics/scope + impact
- Examples:
  - "Led cloud security program for 40+ business units"
  - "Designed governance framework adopted across 5-country operations"
  - "Reduced compliance implementation time by 60%"

### Certifications
- Use official certification titles
- List issuing organizations accurately
- Focus on most recent/relevant

### Thought Leadership
- Publication: Where it appeared (HBR, LinkedIn, Forbes, etc)
- Topic: What you wrote about
- Impact: Why it matters

---

## Content Quality Checklist

Before launching, verify:

- [ ] All content is first-person (I, my)
- [ ] No typos or grammatical errors
- [ ] All links are active and correct
- [ ] Email address is monitored
- [ ] LinkedIn profile is current
- [ ] No outdated information
- [ ] Tone is professional but approachable
- [ ] Metrics are accurate and current
- [ ] Certifications are valid/current
- [ ] Publications are real (with links if possible)

---

## SEO Optimization

After content is in place:

1. **Meta tags** (index.html):
   - Description: 120-160 characters about your expertise
   - Keywords: 5-10 relevant terms from your field

2. **Headings**: 
   - Use semantic HTML (H1, H2, H3)
   - Include keywords naturally

3. **Images** (if added):
   - Add alt text
   - Optimize file sizes

4. **Links**:
   - Use descriptive anchor text
   - Link to relevant external resources

5. **Content**:
   - Include keywords naturally (not forced)
   - Focus on value to reader
   - Keep paragraphs scannable

---

## Customization Timeline

**Day 1: Setup (15 min)**
- Install dependencies: `npm install`
- Run locally: `npm start`

**Day 2-3: Content (1-2 hours)**
- Write/gather all content from resume
- Update each component with real info
- Add any custom images

**Day 4: Testing (30 min)**
- Test locally: `npm start`
- Check all links and forms
- Test on mobile

**Day 5: Deploy (30 min)**
- Build: `npm run build`
- Choose hosting (Vercel recommended)
- Deploy and test

**Day 6: Post-launch (1 hour)**
- Set up analytics
- Set up email form integration
- Update LinkedIn
- Share on social

---

## Need More Than Templates?

Consider adding:
- Blog section (Advanced)
- Case studies (Medium)
- Video testimonials (Medium)
- Newsletter signup (Easy)
- Dark/Light theme toggle (Medium)
- Multiple languages (Advanced)

Check GitHub for community templates or commercial themes for ideas.

---

Good luck with your site! 🚀
