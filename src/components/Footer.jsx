import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Vaibhav Pathak</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Executive leader in Cyber GRC, Risk Governance, Privacy, and Emerging Technology Strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Expertise</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Services</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Work</a></li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4">Expertise</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Cyber GRC & Governance</span></li>
              <li><span className="text-gray-400 text-sm">Risk & Compliance</span></li>
              <li><span className="text-gray-400 text-sm">Privacy Leadership</span></li>
              <li><span className="text-gray-400 text-sm">AI Trust & Governance</span></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a href="https://linkedin.com/in/vaibhav-pathak-governance" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 border border-blue-500/20 flex items-center justify-center hover:border-blue-500/40 hover:bg-blue-500/10 transition-all">
                <svg className="w-5 h-5 text-gray-400 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.686-2.236-1.008 0-1.606.678-1.867 1.334-.096.23-.12.552-.12.876v5.595h-3.554V9h3.414l.051 1.77h.051c.504-.76 1.404-1.864 3.413-1.864 2.496 0 4.366 1.631 4.366 5.143v6.403zM5.337 7.433a2.062 2.062 0 01-2.063-2.065c0-1.138.926-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href="mailto:hello@vaibhavpathak.in" className="w-10 h-10 rounded-lg bg-slate-800 border border-blue-500/20 flex items-center justify-center hover:border-blue-500/40 hover:bg-blue-500/10 transition-all">
                <svg className="w-5 h-5 text-gray-400 hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Vaibhav Pathak. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
