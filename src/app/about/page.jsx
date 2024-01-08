import Header from '@/components/Header/Header'
import React from 'react'
import AboutHero from './components/AboutHero'
// import AboutVaspack from './components/AboutVaspack'
import OurBusiness from './components/OurBusiness'
import Footer from '@/components/Footer/Footer'
import WhatDrivesUs from './components/WhatDrivesUs'
import AboutVaspack2 from './components/AboutVaspack2'

export default function page() {
  return (
    <div>
      <Header />
      <AboutHero />
      {/* <AboutVaspack /> */}
      <AboutVaspack2 />
      <OurBusiness />
      <WhatDrivesUs />
      <Footer />
    </div>
  )
}
