import React, { useState } from 'react'
import { trackEvent } from './Analytics'

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null)

  const caseStudies = [
    {
      id: 'soc2-readiness',
      title: 'SOC 1 & SOC 2 Audit Readiness Program',
      client: 'Enterprise SaaS Platform',
      duration: '6 months',
      scope: 'End-to-end SOC audit preparation',
      challenge: 'The organization had grown rapidly but lacked formal SOC controls. Previous audit attempts resulted in material weaknesses that prevented clean certification.',
      approach: [
        'Conducted comprehensive control gap analysis across all SOC 1 and SOC 2 domains',
        'Designed and implemented evidence management system for 200+ controls',
        'Established remediation workflows and accountability frameworks',
        'Led walkthrough sessions with external auditors'
      ],
      results: [
        'Zero material weaknesses in SOC 1 audit',
        'Clean SOC 2 Type II certification on first attempt',
        'Reduced audit preparation time by 60%',
        'Implemented sustainable control monitoring processes'
      ],
      metrics: {
        'Audit Findings': '0 material weaknesses',
        'Time to Certification': '6 months (industry avg: 12-18 months)',
        'Control Coverage': '98% automated monitoring',
        'Cost Savings': '$150K in avoided remediation costs'
      },
      technologies: ['RSA Archer', 'Evidence Management Platform', 'Control Testing Tools', 'Audit Management Software']
    },
    {
      id: 'cloud-governance',
      title: 'Multi-Cloud Security & Governance Framework',
      client: 'Global Financial Services Firm',
      duration: '9 months',
      scope: 'AWS, GCP, and Azure governance at scale',
      challenge: 'Decentralized cloud adoption created security gaps and compliance risks. Multiple cloud platforms lacked unified governance, leading to inconsistent security postures.',
      approach: [
        'Developed enterprise cloud governance framework covering IAM, logging, and security controls',
        'Implemented automated compliance monitoring across all cloud environments',
        'Created centralized security dashboards and alerting systems',
        'Established cloud security training and awareness programs'
      ],
      results: [
        'Unified security posture across 50+ cloud accounts',
        'Reduced security incidents by 40% through proactive monitoring',
        'Achieved consistent compliance across all regulatory requirements',
        'Enabled secure cloud migration for critical business applications'
      ],
      metrics: {
        'Cloud Accounts Secured': '50+ accounts',
        'Security Incidents': '40% reduction',
        'Compliance Score': '98% across all frameworks',
        'Migration Velocity': '3x faster secure deployments'
      },
      technologies: ['AWS Config', 'GCP Security Command Center', 'Azure Policy', 'Cloud Security Posture Management']
    },
    {
      id: 'ai-governance',
      title: 'AI Governance & Responsible AI Framework',
      client: 'Leading Data Analytics Company',
      duration: '8 months',
      scope: 'ISO 42001 implementation and AI risk management',
      challenge: 'Rapid AI adoption outpaced governance capabilities. Lack of AI-specific controls created regulatory and ethical risks as ML models moved to production.',
      approach: [
        'Conducted AI risk assessment across existing ML pipelines',
        'Designed ISO 42001-aligned governance framework',
        'Implemented bias detection and fairness testing controls',
        'Created model documentation and explainability requirements'
      ],
      results: [
        'Achieved ISO 42001 certification 6 months ahead of regulatory deadline',
        'Implemented automated bias detection reducing ethical risks by 75%',
        'Established model governance processes for 20+ production ML models',
        'Built trust with customers through transparent AI practices'
      ],
      metrics: {
        'Models Governed': '20+ production models',
        'Bias Incidents Prevented': '75% reduction',
        'Time to ISO 42001': '8 months (vs 18-month industry average)',
        'Customer Trust Score': '25% improvement'
      },
      technologies: ['AI Governance Platform', 'Bias Detection Tools', 'Model Monitoring Systems', 'Explainability Frameworks']
    }
  ]

  return (
    <section id="case-studies" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Case Studies</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Deep dives into complex governance challenges and how we solved them. Real results from enterprise environments.
        </p>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-slate-800 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group"
              onClick={() => {
                setSelectedCase(study)
                trackEvent('case_study_view', {
                  case_study_id: study.id,
                  case_study_title: study.title,
                  client: study.client
                })
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                  {study.scope}
                </span>
                <span className="text-gray-400 text-sm">{study.duration}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {study.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {study.client}
              </p>

              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-blue-400">Challenge:</span> {study.challenge.substring(0, 100)}...
                </p>
              </div>

              <div className="mt-4 flex items-center text-blue-400 font-semibold text-sm">
                View Full Case Study →
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        {selectedCase && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-blue-500/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedCase.title}</h3>
                    <p className="text-blue-400 font-semibold">{selectedCase.client}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
                    <div className="space-y-3">
                      <p><span className="font-semibold text-blue-400">Duration:</span> {selectedCase.duration}</p>
                      <p><span className="font-semibold text-blue-400">Scope:</span> {selectedCase.scope}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedCase.metrics).map(([key, value]) => (
                        <div key={key} className="bg-slate-800 p-3 rounded-lg">
                          <p className="text-blue-400 text-sm font-semibold">{key}</p>
                          <p className="text-white text-lg font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">The Challenge</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedCase.challenge}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Our Approach</h4>
                    <ul className="space-y-2">
                      {selectedCase.approach.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Results Achieved</h4>
                    <ul className="space-y-2">
                      {selectedCase.results.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
