import React from 'react'

export default function Articles() {
  const topics = [
    {
      topic: 'Why Most Compliance Programs Fail (And How to Build One That Doesn\'t)',
      description: 'The gap between audit expectations and what organizations actually build. What separates one-time audits from sustainable compliance programs. The framework that works.'
    },
    {
      topic: 'Responsible AI Beyond Compliance - Building Enterprise Trust',
      description: 'ISO 42001 is the minimum. Truly responsible AI means governance, fairness testing, bias detection, and accountability mechanisms. How enterprises move beyond regulatory checkbox to AI integrity.'
    },
    {
      topic: 'Cloud Governance: The Real Audit Expectations',
      description: 'Auditors see cloud differently now. What IAM, logging, and configuration controls actually look like at audit. How to architect cloud governance that satisfies security, compliance, and business.'
    },
    {
      topic: 'AI Bias in Enterprise Systems - The Compliance and Business Risk',
      description: 'Biased AI doesn\'t just expose organizations to regulatory risk - it damages customer trust and revenue. Real strategies for detecting bias, ensuring fairness, and building control frameworks that catch discrimination before deployment.'
    },
    {
      topic: 'The Remediation Tracking Problem (And Why It Matters)',
      description: 'Organizations track remediation in email threads and spreadsheets. This is why findings resurface. Here is how mature organizations manage remediation end-to-end.'
    },
    {
      topic: 'Transparency and Explainability in AI - Why It Matters, How to Build It',
      description: 'Black-box AI is a governance risk. Enterprise AI requires explainability frameworks, documentation standards, and transparency controls. How to architect AI systems that regulators, boards, and customers can trust.'
    },
    {
      topic: 'AI Governance Isn\'t Optional Anymore',
      description: 'ISO 42001 is just the start. Enterprise AI requires governance frameworks for model risk, data quality, biasing, and accountability. How to build AI governance that scales.'
    },
    {
      topic: 'Building Human Oversight into AI Systems - Governance That Prevents Harm',
      description: 'AI decisions should never be purely algorithmic. Responsible AI means designing human-in-the-loop controls, escalation workflows, and oversight mechanisms that catch errors and prevent unethical decisions.'
    },
    {
      topic: 'Governance as Competitive Advantage',
      description: 'Organizations that govern well move faster. Board approvals accelerate. Customer confidence rises. This is not compliance overhead - it is strategic infrastructure.'
    },
    {
      topic: 'Building Control Frameworks That Teams Actually Use',
      description: 'Most GRC programs fail at adoption. Here is why teams ignore them and how to design governance workflows that teams embrace instead of resist.'
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Articles & Insights</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Topics I write and speak about. Strategic perspectives on governance, compliance, and risk.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-800 border border-blue-500/20 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">
                {item.topic}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ready to Discuss */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-3">Let's Discuss</h3>
          <p className="text-gray-300 mb-4">
            I'm interested in conversations about governance frameworks, compliance strategy, cloud security, and the emerging landscape of AI governance. If you're working on challenges in these areas or want to explore strategic perspectives, let's connect.
          </p>
          <a href="#connect" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300">
            Start a Conversation
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
