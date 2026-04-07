import React from 'react'

export default function Differentiators() {
  const differentiators = [
    {
      title: "Auditor Mentality",
      description: "I think like auditors because I was one. This gives me unique insight into what actually gets scrutinized—and what gets overlooked.",
      icon: "🔍"
    },
    {
      title: "Business-Focused",
      description: "Governance should enable business, not hinder it. I design programs that teams adopt because they see the value, not just compliance.",
      icon: "⚡"
    },
    {
      title: "Enterprise-Tested",
      description: "Every framework I've built has been battle-tested in Fortune 500 environments. No theoretical models—just proven approaches.",
      icon: "🏆"
    },
    {
      title: "AI Governance Pioneer",
      description: "ISO 42001 Lead Auditor certified. I help enterprises navigate the frontier of AI governance before it becomes a crisis.",
      icon: "🤖"
    }
  ]

  return (
    <section id="differentiators" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Why Work With Me</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          What sets my approach apart in a crowded field of consultants.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="p-8 bg-slate-800 border border-blue-500/20 rounded-lg hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{diff.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-gray-300 leading-relaxed text-center">
            I don't just implement frameworks—I build governance that becomes part of your organizational DNA.
            Programs that teams embrace, auditors respect, and executives champion.
          </p>
        </div>
      </div>
    </section>
  )
}
