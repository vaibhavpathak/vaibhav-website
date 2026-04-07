import React from 'react'
import { trackEvent } from './Analytics'

export default function Blog() {
  const articles = [
    {
      title: 'Why Most Compliance Programs Fail (And How to Build One That Doesn\'t)',
      excerpt: 'The gap between audit expectations and what organizations actually build. Most compliance programs fail because they\'re designed for auditors, not for the people who have to live with them.',
      readTime: '8 min read',
      publishDate: 'March 2024',
      category: 'Strategy',
      slug: 'compliance-programs-that-work'
    },
    {
      title: 'Responsible AI Beyond Compliance - Building Enterprise Trust',
      excerpt: 'ISO 42001 is the minimum. Truly responsible AI means governance, fairness testing, bias detection, and accountability mechanisms that go beyond regulatory checkboxes.',
      readTime: '6 min read',
      publishDate: 'February 2024',
      category: 'AI Governance',
      slug: 'responsible-ai-beyond-compliance'
    },
    {
      title: 'Cloud Governance: The Real Audit Expectations',
      excerpt: 'Auditors see cloud differently now. What IAM, logging, and configuration controls actually get scrutinized. How to architect cloud governance that satisfies security, compliance, and business velocity.',
      readTime: '10 min read',
      publishDate: 'January 2024',
      category: 'Cloud Security',
      slug: 'cloud-governance-audit-expectations'
    },
    {
      title: 'AI Bias in Enterprise Systems - The Compliance and Business Risk',
      excerpt: 'Biased AI doesn\'t just expose organizations to regulatory risk—it damages customer trust and revenue. Real strategies for detecting bias, ensuring fairness, and building control frameworks.',
      readTime: '7 min read',
      publishDate: 'December 2023',
      category: 'AI Governance',
      slug: 'ai-bias-compliance-risk'
    },
    {
      title: 'The Remediation Tracking Problem (And Why It Matters)',
      excerpt: 'Organizations track remediation in email threads and spreadsheets. This is why findings resurface. Here is how mature organizations manage remediation end-to-end with proper tracking and accountability.',
      readTime: '5 min read',
      publishDate: 'November 2023',
      category: 'Operations',
      slug: 'remediation-tracking-problem'
    },
    {
      title: 'Transparency and Explainability in AI - Why It Matters, How to Build It',
      excerpt: 'Black-box AI is a governance risk. Enterprise AI requires explainability frameworks, documentation standards, and transparency controls. How to architect AI systems that regulators, boards, and customers can trust.',
      readTime: '9 min read',
      publishDate: 'October 2023',
      category: 'AI Governance',
      slug: 'ai-transparency-explainability'
    }
  ]

  const categories = ['All', 'Strategy', 'AI Governance', 'Cloud Security', 'Operations']

  return (
    <section id="blog" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Latest Insights</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Deep dives into governance, compliance, and emerging technology challenges. Practical frameworks and real-world solutions.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-slate-800 border border-blue-500/20 rounded-lg text-gray-300 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-slate-800 border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{article.publishDate}</span>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                    onClick={() => trackEvent('article_click', { article_slug: article.slug, article_title: article.title })}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights on governance, compliance, and emerging technology delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-slate-800 border border-blue-500/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              onClick={() => trackEvent('newsletter_signup_attempt')}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
