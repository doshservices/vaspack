import Header from '@/components/Header/Header'
import React from 'react'
import AboutHero from './components/AboutHero'
import AboutVaspack from './components/AboutVaspack'
import OurBusiness from './components/OurBusiness'
import Footer from '@/components/Footer/Footer'
import WhatDrivesUs from './components/WhatDrivesUs'

export default function page() {
  return (
    <div>
      <Header />
      <AboutHero />
      <AboutVaspack />
      <OurBusiness />
      <WhatDrivesUs />
      <Footer />
    </div>
  )
}
