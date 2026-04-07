import React from 'react'

export default function Services() {
  const services = [
    {
      title: 'GRC Program Development',
      description: 'Build enterprise governance from the ground up. Framework design, control taxonomy, risk assessment methodology, and operational governance structure.',
      outcomes: ['Audit-ready governance framework', 'Risk-based control taxonomy', 'Operating model definition']
    },
    {
      title: 'Audit Readiness & Compliance Acceleration',
      description: 'Prepare for SOC 1/2, ISO 27001, or compliance audits. Evidence management system setup, control testing, gap remediation, and external auditor coordination.',
      outcomes: ['Zero major audit findings', 'Accelerated audit cycles', 'Clean compliance certificates']
    },
    {
      title: 'Cloud & AI Governance',
      description: 'Architect security and governance across multi-cloud environments and emerging AI systems. Risk frameworks, control design, and responsible AI governance.',
      outcomes: ['Secure cloud architecture', 'AI trust and fairness frameworks', 'Compliance-enabled innovation']
    },
    {
      title: 'Governance Advisory & Strategy',
      description: 'Strategic guidance on enterprise risk, governance modernization, and compliance strategy. Assess current state, define future vision, execute roadmap.',
      outcomes: ['Governance transformation roadmap', 'Competitive advantage positioning', 'Risk-driven business decisions']
    },
    {
      title: 'GRC Training, Certification & Domain Learning',
      description: 'Structured learning programs for professionals, internal teams, and aspiring GRC practitioners. Training covers certification readiness, GRC fundamentals, audit concepts, control design, risk assessment, evidence management, and practical workflows used in real enterprise programs.',
      outcomes: ['Certification-oriented learning paths', 'Stronger GRC domain understanding', 'Job-ready practical exposure']
    }
  ]

  const engagementModels = [
    {
      type: 'Advisory',
      description: 'Strategic guidance and governance consulting on complex risk and compliance challenges'
    },
    {
      type: 'Retainer',
      description: 'Ongoing GRC leadership and governance support for enterprises building mature programs'
    },
    {
      type: 'Project-Based',
      description: 'Discrete governance initiatives: audit readiness, framework implementation, controlled remediation'
    }
  ]

  return (
    <section id="services" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Services & Engagement</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          I partner with enterprises to build governance that works. Clear offerings, measurable outcomes, flexible engagement.
        </p>

        {/* Service Offerings */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">What I Offer</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 bg-slate-800 border border-blue-500/20 rounded-lg hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <h4 className="text-2xl font-bold text-blue-400 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-300">Expected Outcomes:</p>
                  <ul className="space-y-1">
                    {service.outcomes.map((outcome, odx) => (
                      <li key={odx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-12">
          <h3 className="text-3xl font-bold text-white mb-8">How We Work</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div key={idx} className="p-6">
                <h4 className="text-xl font-bold text-blue-400 mb-3">{model.type}</h4>
                <p className="text-gray-300 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-blue-500/20">
            <p className="text-gray-300 leading-relaxed">
              Each engagement is customized based on your specific governance challenges, maturity level, and business objectives. I work with enterprises where governance and compliance are strategic drivers, not just audit necessities. Let's discuss what makes sense for your situation.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Training engagements can also be tailored for GRC certification support and domain learning, including audit fundamentals, control mapping, evidence handling, cloud and AI governance concepts, and hands-on guidance for professionals transitioning into GRC roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
