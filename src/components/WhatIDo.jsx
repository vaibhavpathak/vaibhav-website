import React from 'react'

export default function WhatIDo() {
  const focuses = [
    {
      title: 'Audit Readiness & Clean Audits',
      description: 'Your SOC/ISO audit is coming. Instead of scrambling, I design control frameworks that pass audits the first time. No major findings. No surprises. Enterprise-grade audit readiness from day one.'
    },
    {
      title: 'Cloud Governance at Scale',
      description: 'Managing security and compliance across AWS, GCP, and Azure is complex. I architect cloud governance programs that satisfy auditors, reduce misconfiguration risk, and let teams move fast with confidence.'
    },
    {
      title: 'GRC Program Foundation',
      description: 'Most organizations lack governance fundamentals. I build foundational GRC—risk frameworks, control libraries, remediation workflows—that actually stick. Teams adopt them. Auditors respect them.'
    },
    {
      title: 'Compliance Acceleration',
      description: 'SOX? ISO 27001? AI governance? I compress compliance timelines. Framework design, control implementation, workflow automation, evidence management—I reduce your time-to-compliance by 40%+.'
    },
    {
      title: 'Remediation & Evidence Management',
      description: 'Findings buried in emails. Remediation tracking is a spreadsheet mess. I implement structured workflows and evidence systems that keep auditors happy and give you real visibility into control status.'
    },
    {
      title: 'Emerging Risk: AI & Responsible Tech',
      description: 'AI governance isn\'t optional anymore. I help enterprises navigate ISO 42001, AI risk frameworks, and responsible AI governance—staying ahead of regulation instead of catching up.'
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Problems I Solve</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Core engagement areas where I deliver measurable impact for regulated enterprises.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {focuses.map((focus, idx) => (
            <div className="p-8 border border-blue-500/20 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                {focus.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {focus.description}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 pt-12 border-t border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">The Outcome You Get</h3>
          <div className="max-w-3xl space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="font-semibold text-blue-300">Governance that accelerates.</span> Instead of slowing deals, governance becomes a competitive advantage. Board approvals move faster. Risk decisions are data-driven. Customers have confidence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="font-semibold text-blue-300">Audits that pass cleanly.</span> When auditors arrive, you're ready. Controls are documented, evidence is organized, remediation is tracked. No scramble. No major findings.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="font-semibold text-blue-300">Teams that adopt the program.</span> Most GRC programs fail because teams don't use them. Mine work because they reduce friction. Clean UI. Clear workflows. Built for the people who use them daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
