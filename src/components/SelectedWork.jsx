import React from 'react'

export default function SelectedWork() {
  const projects = [
    {
      title: 'SOC 1 & SOC 2 Audit Readiness Program',
      scope: 'Enterprise Client',
      outcome: 'Led comprehensive audit readiness including control identification, evidence management system setup, and remediation tracking. Zero findings during external audit.',
      focus: ['SOC 1', 'SOC 2', 'Audit Readiness', 'Evidence Management']
    },
    {
      title: 'Cloud Security Risk Assessment – AWS & GCP',
      scope: 'Multi-Cloud Environment',
      outcome: 'Performed security risk assessments across AWS and GCP covering IAM, logging, data protection, and secure configuration. Documented 15+ recommendations aligned with SOC and ISO 27001 standards.',
      focus: ['AWS', 'GCP', 'Cloud Security', 'Risk Assessment']
    },
    {
      title: 'ISO 27001 Framework Implementation',
      scope: 'BFSI Organization',
      outcome: 'Supported design and implementation of ISO 27001-aligned GRC framework including risk assessments, control identification, and audit readiness activities.',
      focus: ['ISO 27001', 'GRC', 'Risk Assessment', 'Compliance']
    },
    {
      title: 'SOX Compliance & ITGC Testing',
      scope: 'Financial Services Client',
      outcome: 'Conducted IT SOX audits and ITGC testing on Oracle SaaS Fusion applications. Remediated critical findings and implemented preventive controls.',
      focus: ['SOX', 'ITGC', 'Oracle', 'Financial Controls']
    },
    {
      title: 'GRC Workflow Automation',
      scope: 'Enterprise Program',
      outcome: 'Implemented RSA Archer and MetricStream workflows that reduced manual compliance effort by 40% and improved audit reporting accuracy.',
      focus: ['GRC Tools', 'RSA Archer', 'MetricStream', 'Process Improvement']
    },
    {
      title: 'Security & Compliance Program Leadership',
      scope: 'Cloud Platform Operations',
      outcome: 'Led SOC control testing and ITGC testing for cloud environments. Implemented corrective actions that reduced security-related findings by 35% year-over-year.',
      focus: ['Cloud Security', 'Control Testing', 'Program Leadership', 'Compliance']
    }
  ]

  return (
    <section id="work" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Selected Work</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Key projects and engagements that showcase my GRC and compliance work across enterprises.
        </p>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="p-8 border border-blue-500/20 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-shadow bg-slate-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-blue-400 font-semibold">{project.scope}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.outcome}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.focus.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 pt-12 border-t border-blue-500/20">
          <p className="text-lg text-gray-300 leading-relaxed">
            These projects represent my core experience: building audit-ready controls, leading compliance programs, managing cloud security assessments, and implementing GRC tooling that actually works. I've worked with enterprise clients across BFSI, SaaS, and regulated industries where governance rigor and compliance maturity are non-negotiable.
          </p>
        </div>
      </div>
    </section>
  )
}
