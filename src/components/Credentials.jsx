import React from 'react'

export default function Credentials() {
  const certifications = [
    {
      title: 'Certified Cloud Security Professional (CCSP)',
      issuer: 'ISC²',
      focus: 'Cloud Infrastructure & Platform Security'
    },
    {
      title: 'ISO/IEC 42001:2023 Lead Auditor',
      issuer: 'BSI / Accredited Body',
      focus: 'Artificial Intelligence Governance'
    },
    {
      title: 'ISC² Risk Management Certificate Program',
      issuer: 'ISC²',
      focus: 'Enterprise Risk Management'
    },
    {
      title: 'BSI Certified Lead GDPR & PIMS Implementer',
      issuer: 'BSI',
      focus: 'Privacy & Data Protection'
    }
  ]

  return (
    <section id="credentials" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Credentials</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Professional certifications and educational qualifications that ground my expertise.
        </p>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-8 bg-slate-800 border-2 border-blue-500/20 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-blue-400 font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-300">{cert.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-300 font-semibold mb-3">Professional Foundation</p>
          <p className="text-gray-300 leading-relaxed">
            My credentials represent deep expertise across security, governance, compliance, and emerging technologies. From foundational IT security (CCSP) to specialized governance frameworks (GDPR, Risk Management) to cutting-edge AI governance (ISO 42001), I maintain currency across evolving domains.
          </p>
        </div>
      </div>
    </section>
  )
}
