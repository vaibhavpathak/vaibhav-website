import React from 'react'

export default function Trainings() {
  const trainingSessions = [
    {
      topic: 'Security Awareness & Compliance Culture',
      description: 'Conducted security awareness sessions across organizational teams to build compliance culture and risk consciousness.'
    },
    {
      topic: 'SOC 2 & Audit Fundamentals',
      description: 'Training programs for teams on SOC 2 requirements, control design, evidence management, and audit readiness practices.'
    },
    {
      topic: 'Cloud Security Best Practices',
      description: 'Sessions on cloud security basics, IAM strategy, secure configuration, and compliance requirements across AWS, GCP, and Azure.'
    },
    {
      topic: 'ITGC & Financial System Security',
      description: 'Technical training on IT General Controls, Oracle ERP security, control testing methodology, and SOX compliance.'
    },
    {
      topic: 'GRC Tools & Workflows',
      description: 'Hands-on training on RSA Archer and MetricStream for risk management, compliance tracking, and audit reporting.'
    },
    {
      topic: 'Risk Assessment & Control Design',
      description: 'Workshops on risk assessment frameworks, control design principles, and building effective governance programs.'
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Trainings & Sessions</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Educational engagement and knowledge sharing across compliance, security, and governance domains.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trainingSessions.map((session, idx) => (
            <div key={idx} className="p-8 bg-slate-800 border border-blue-500/20 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">
                {session.topic}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {session.description}
              </p>
            </div>
          ))}
        </div>

        {/* Training Approach */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-12">
          <h3 className="text-2xl font-bold text-white mb-6">Training Philosophy</h3>
          
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-blue-300 mb-2">Practical Focus</p>
              <p className="text-gray-300">
                Trainings are grounded in real-world scenarios and hands-on experience, not theory. Participants walk away with frameworks they can apply immediately.
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-300 mb-2">Audience Aware</p>
              <p className="text-gray-300">
                Sessions are tailored to audience needs—whether technical teams, business stakeholders, or audit teams. Same content, different framing and depth.
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-300 mb-2">Experience-Driven</p>
              <p className="text-gray-300">
                Built from 12+ years in the field. Examples, case studies, and common pitfalls drawn from real audit and compliance programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
