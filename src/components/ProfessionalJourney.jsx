import React from 'react'

export default function ProfessionalJourney() {
  const journey = [
    {
      period: '2023 - Present',
      role: 'GRC Lead (Associate Consultant)',
      company: 'Global Enterprise, Noida',
      description: 'Leading Governance, Risk, and Compliance initiatives for enterprise clients across regulated industries. Conducting IT SOX audits, supporting SOC 1/2 audit readiness, implementing GRC workflows using RSA Archer and MetricStream.'
    },
    {
      period: '2022 - 2023',
      role: 'Senior Consultant',
      company: 'Compliance Services Firm, Gurugram',
      description: 'Planned and executed SOC 1, SOC 2, and ISO 27001 assessments for multiple enterprise clients. Managed end-to-end audit lifecycle and performed security assessments across AWS, Azure, and Google Cloud.'
    },
    {
      period: '2018 - 2022',
      role: 'Lead Cyber Risk Analyst',
      company: 'Cloud Platform Company, Noida',
      description: 'Managed security and compliance for cloud environments. Led SOC control testing and ITGC testing, resulting in zero major findings. Implemented corrective actions reducing security incidents by 35%.'
    },
    {
      period: '2017 - 2018',
      role: 'Information Security Consultant',
      company: 'Enterprise Services Company, Gurugram',
      description: 'Supported ISAE 3402 compliance audits. Managed security and compliance of SaaS applications. Coordinated with external auditors and internal teams across global deployments.'
    },
    {
      period: '2014 - 2017',
      role: 'Software Engineer – IT Audit & SOX Compliance',
      company: 'Technology Corporation, Gurugram',
      description: 'ITGC and SOX auditing of Oracle Applications (SaaS Fusion and R12). Audited Oracle EBS configuration, policy compliance, database logs, and user access controls.'
    },
    {
      period: '2011 - 2012',
      role: 'Web Developer',
      company: 'Web Development Studio, Ludhiana',
      description: 'Early career: supported development of web applications and learned secure coding practices. Gained foundational exposure to application security.'
    }
  ]

  return (
    <section id="journey" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Professional Journey</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          12+ years of progression from web development through IT audit into enterprise GRC leadership.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {journey.map((item, idx) => (
              <div key={idx} className="relative md:pl-32">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-2 w-16 h-16 bg-slate-900 border-4 border-blue-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                </div>

                {/* Content box */}
                <div className="p-8 bg-slate-800 border border-blue-500/20 rounded-lg hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="mb-4">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">
                      {item.period}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  
                  <p className="text-lg text-blue-300 font-semibold mb-4">
                    {item.company}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Thread */}
        <div className="mt-16 pt-12 border-t border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">The Through-Line</h3>
          <div className="max-w-3xl space-y-4 text-gray-300">
            <p className="leading-relaxed">
              My career path shows consistent progression toward governance and compliance leadership. What started in secure development and IT audit has evolved into deep expertise in enterprise GRC, compliance frameworks, and cloud security.
            </p>
            <p className="leading-relaxed">
              The common thread: building secure, compliant, audit-ready systems and programs. Whether I was testing Oracle security controls, managing SOC audits, or leading cloud security assessments, the core mission remained: help organizations understand and manage risk, maintain compliance rigor, and build controls that actually work.
            </p>
            <p className="leading-relaxed">
              Today, I'm focused on expanding this further into emerging areas—particularly AI governance and responsible AI frameworks—while continuing to deepen expertise in enterprise GRC and complex compliance programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
