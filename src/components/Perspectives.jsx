import React from 'react'

export default function Perspectives() {
  const perspectives = [
    {
      topic: 'Governance as Competitive Advantage',
      description: 'Mature organizations don\'t view governance as overhead—they architect it as strategic infrastructure. Faster board approvals. Better risk visibility. Customer confidence. Governance that competes.',
      category: 'Strategy'
    },
    {
      topic: 'The AI Governance Imperative',
      description: 'AI governance isn\'t an optional compliance exercise—it\'s existential risk management. Enterprise AI requires frameworks for model uncertainty, data quality, algorithmic bias, and accountability. Build it now or scramble later.',
      category: 'Emerging Tech'
    },
    {
      topic: 'Why Compliance Programs Fail at Adoption',
      description: 'Most GRC invests fail because they\'re built for auditors, not for teams. Teams see busywork. Governance fails at adoption. The solution: design controls that reduce friction, not increase it.',
      category: 'Implementation'
    },
    {
      topic: 'Cloud Governance Is Security Governance',
      description: 'Organizations mismanage cloud because they separate”cloud” from ”security.” They\'re the same. Effective cloud governance is defense-in-depth: IAM, logging, data isolation, configuration control. Unified.',
      category: 'Cloud'
    },
    {
      topic: 'The Remediation Tracking Gap',
      description: 'Findings resurface because organizations track remediation in email threads and spreadsheets. Mature enterprises architect remediation as a sys­tem: visibility, accountability, escalation. This is where compliance lives or dies.',
      category: 'Risk'
    },
    {
      topic: 'Building for Auditors While Enabling Business',
      description: 'The paradox: controls must pass audits AND enable the business. The answer isn\'t compromise—it\'s architecture. Clean UI. Clear workflows. Evidence that\'s automatically collected. Governance that accelerates.' ,
      category: 'Strategy'
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Perspectives</h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            Thoughts on governance, privacy, risk, and the future of enterprise trust
          </p>
        </div>

        {/* Perspectives Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {perspectives.map((perspective, idx) => (
            <div
              key={idx}
              className="p-8 bg-slate-800 border border-blue-500/20 rounded-lg hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              {/* Category Badge */}
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
                  {perspective.category}
                </span>
              </div>

              {/* Topic */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {perspective.topic}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {perspective.description}
              </p>

              {/* Explore Link */}
              <button className="mt-4 text-blue-400 font-semibold hover:text-blue-300 flex items-center group/btn">
                Explore thought
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Reflection Section */}
        <div className="mt-16 p-12 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why These Perspectives Matter
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            These aren't abstract ideas—they're patterns I've observed across 12+ years of governance work. They represent my thinking on what makes compliance programs effective, how to design controls that actually enable business, and where the discipline of governance is heading next, especially with emerging technologies like AI.
          </p>
        </div>
      </div>
    </section>
  )
}
