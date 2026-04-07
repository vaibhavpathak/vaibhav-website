import React from 'react'

export default function WhoIAm() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Why I Do This</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Most governance programs fail because they're built for auditors, not for organizations. I build differently.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">The Problem I Solve</h3>
              <p className="text-gray-300 leading-relaxed">
                Organizations struggle with GRC because most approaches treat compliance as a checkbox, not a business capability. Auditors see it. CFOs see it in the audit findings. Teams see it in the busywork. I solve this by designing governance that aligns compliance rigor with business velocity—frameworks that reduce friction while increasing control maturity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Governance should be an accelerator. I design controls that are auditor-ready from day one, remediation workflows that actually get tracked, risk programs that inform real business decisions. The result: audit readiness without the audit scramble. Compliance that enables growth.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">What I've Built</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade GRC programs across Fortune 500 companies, high-growth SaaS platforms, and regulated financial firms. Managed 50+ audits with zero major findings. Implemented cloud governance across AWS, GCP, and Azure. Launched AI governance programs ahead of emerging regulation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Why It Matters</h3>
              <p className="text-gray-300 leading-relaxed">
                In regulated industries, governance isn't optional—it's strategic. Better controls mean faster board approvals. Clearer risk visibility means better business decisions. Audit readiness means confidence. I've helped organizations move from compliance reactive-mode to governance that competes.
              </p>
            </div>
          </div>
        </div>

        {/* Key Traits */}
        <div className="mt-16 pt-12 border-t border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-8">How I'm Different</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-blue-400 mb-2">Auditor Mentality</p>
              <p className="text-gray-400">I think like an auditor, so I design controls that exceed audit expectations. No surprises. No findings. Clean audits.</p>
            </div>
            <div>
              <p className="font-semibold text-blue-400 mb-2">Business-Focused</p>
              <p className="text-gray-400">I don't just comply—I enable. Controls designed to reduce business friction while increasing governance rigor. Compliance that accelerates, not delays.</p>
            </div>
            <div>
              <p className="font-semibold text-blue-400 mb-2">Enterprise-Tested</p>
              <p className="text-gray-400">12+ years across regulated industries (BFSI, SaaS). Tools (RSA Archer, MetricStream). Cloud platforms (AWS, GCP, Azure). Frameworks that work at scale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
