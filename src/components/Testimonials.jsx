import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Vaibhav transformed our GRC program from a compliance burden into a strategic asset. His approach reduced our audit findings by 40% while accelerating our cloud migration.",
      author: "Chief Information Security Officer",
      company: "Fortune 500 Financial Services",
      initials: "JC"
    },
    {
      quote: "The AI governance framework Vaibhav designed gave us confidence to deploy ML models at scale. His ISO 42001 expertise was exactly what we needed.",
      author: "VP of Data Science",
      company: "Leading SaaS Platform",
      initials: "MR"
    },
    {
      quote: "Vaibhav's remediation tracking system eliminated our recurring audit findings. We now close issues permanently instead of chasing them quarterly.",
      author: "Compliance Director",
      company: "Global BFSI Organization",
      initials: "SK"
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">Trusted By Industry Leaders</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          What clients say about working together.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 bg-slate-800 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.initials}</span>
                  </div>
                </div>
                <div>
                  <p className="text-blue-400 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
