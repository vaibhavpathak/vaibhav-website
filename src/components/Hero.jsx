import React from 'react'

export default function Hero() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-6 leading-tight">
            Enterprise GRC That Actually Works
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl text-gray-300 font-light mb-8 leading-relaxed">
            I build governance programs that reduce audit findings, accelerate compliance, and become strategic enablers—not just compliance burdens.
          </p>

          {/* Professional Identity */}
          <div className="space-y-4 mb-10">
            <p className="text-lg text-gray-400">
              12+ years transforming enterprise GRC. From audit readiness to remediation tracking, cloud governance to emerging AI risk—I deliver programs that teams adopt and auditors respect.
            </p>
            <p className="text-lg text-gray-400">
              Served Fortune 500 enterprises, high-growth SaaS platforms, and regulated financial services firms. Reduced security findings by 35%, accelerated audit cycles by 50%, and implemented controls that stick.
            </p>
          </div>

          {/* Quick Credentials */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pt-8 border-t border-blue-500/20">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">12+</p>
              <p className="text-sm text-gray-400 mt-1">Years Enterprise GRC</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">35%</p>
              <p className="text-sm text-gray-400 mt-1">Finding Reduction</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+</p>
              <p className="text-sm text-gray-400 mt-1">Audits & Assessments</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">100%</p>
              <p className="text-sm text-gray-400 mt-1">Audit Pass Rate</p>
            </div>
          </div>

          {/* CTA Links */}
          <div className="flex flex-wrap gap-4">
            <a href="#expertise" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Explore Expertise
              <span className="ml-2">→</span>
            </a>
            <a href="#journey" className="inline-flex items-center px-6 py-3 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all">
              View My Journey
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
