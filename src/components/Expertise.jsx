import React from 'react'

export default function Expertise() {
  const expertiseAreas = [
    {
      domain: 'Governance, Risk & Compliance (GRC)',
      description: 'Build enterprise GRC programs that actually work. From framework design to evidencing and remediation tracking, I architect governance that reduces audit findings by 35%+ while accelerating compliance cycles.',
      icon: '🏗️'
    },
    {
      domain: 'Cyber Risk Management',
      description: 'Enterprise cyber risk doesn\'t have to be a mystery. Risk assessment, threat landscape analysis, remediation workflows—I make cyber risk visible, measurable, and manageable at scale.',
      icon: '🔒'
    },
    {
      domain: 'SOC 1 & SOC 2 Audits',
      description: 'SOC audits don\'t have to be stressful. Planning to evidence collection to external auditor coordination—I deliver 100% audit prep so you pass cleanly with zero major findings.',
      icon: '✓'
    },
    {
      domain: 'ISO 27001 & Standards Compliance',
      description: 'ISO 27001 isn\'t just a checkbox. I implement frameworks that satisfy auditors, enable business, and become sustainable competitive advantages. Control mapping, assessments, audit readiness.',
      icon: '🔐'
    },
    {
      domain: 'SOX & Financial Controls (ITGC)',
      description: '12+ years in SOX compliance and Oracle ERP security. I architect ITGC testing that passes financial audits and builds confidence in your control environment.',
      icon: '💰'
    },
    {
      domain: 'Cloud Security (AWS, GCP, Azure)',
      description: 'Multi-cloud security is complex. I architect cloud governance that satisfies auditors, enables business velocity, and keeps your infrastructure secure across AWS, GCP, and Azure.',
      icon: '☁️'
    },
    {
      domain: 'Identity & Access Management (IAM)',
      description: 'IAM is often the weakest link. I design provisioning workflows, access control policies, and audit mechanisms that keep your identity environment tight and auditor-ready.',
      icon: '🔑'
    },
    {
      domain: 'AI Governance & Responsible AI',
      description: 'AI governance is the compliance frontier. ISO 42001 certified. I help enterprises architect AI risk frameworks, bias detection, fairness testing, and accountability mechanisms.',
      icon: '🤖'
    }
  ]

  const tools = [
    { name: 'RSA Archer', category: 'GRC Platforms' },
    { name: 'MetricStream', category: 'GRC Platforms' },
    { name: 'Oracle EBS & Fusion', category: 'Enterprise Systems' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'GCP', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'ISO 27001', category: 'Frameworks' },
    { name: 'SOC 2', category: 'Frameworks' },
    { name: 'ISO 42001 (AI)', category: 'Frameworks' },
    { name: 'Risk Methodology', category: 'Audit' },
    { name: 'Control Testing', category: 'Audit' },
    { name: 'Evidence Management', category: 'Audit' }
  ]

  return (
    <section id="expertise" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Expertise</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Core domains and technical capabilities built across 12+ years in governance and compliance.
        </p>

        {/* Core Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertiseAreas.map((area, idx) => (
            <div key={idx} className="p-8 bg-slate-800 border border-blue-500/20 rounded-lg hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{area.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">
                    {area.domain}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-12 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Tools, Platforms & Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="p-6 bg-slate-800 border border-blue-500/20 rounded-lg hover:border-blue-400/40 hover:bg-slate-700/50 transition-all">
                <p className="text-sm text-blue-400 font-semibold uppercase tracking-wide mb-1">{tool.category}</p>
                <p className="text-white font-semibold">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialization Note */}
        <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎯</span>
            <div>
              <p className="text-lg font-bold text-white mb-2">Industry Specialization</p>
              <p className="text-gray-300 leading-relaxed">
                Deep expertise in <span className="font-semibold text-blue-300">BFSI</span> (Banking, Financial Services, Insurance) and <span className="font-semibold text-blue-300">SaaS</span> environments where compliance maturity and audit rigor are non-negotiable. I understand regulated industry business dynamics and know how to architect governance that accelerates, not delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
