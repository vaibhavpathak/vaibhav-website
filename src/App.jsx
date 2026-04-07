import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhoIAm from './components/WhoIAm'
import WhatIDo from './components/WhatIDo'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Differentiators from './components/Differentiators'
import Testimonials from './components/Testimonials'
import CaseStudies from './components/CaseStudies'
import Blog from './components/Blog'
import Trainings from './components/Trainings'
import Credentials from './components/Credentials'
import ProfessionalJourney from './components/ProfessionalJourney'
import Perspectives from './components/Perspectives'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Analytics from './components/Analytics'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Analytics />
      <Header />
      <main>
        <Hero />
        <WhoIAm />
        <WhatIDo />
        <Services />
        <Expertise />
        <Differentiators />
        <Testimonials />
        <CaseStudies />
        <Blog />
        <Trainings />
        <Credentials />
        <ProfessionalJourney />
        <Perspectives />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default App
