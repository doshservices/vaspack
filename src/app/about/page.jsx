import React from 'react'
import AboutHero from './components/AboutHero'
// import AboutVaspack from './components/AboutVaspack'
import OurBusiness from './components/OurBusiness'
import WhatDrivesUs from './components/WhatDrivesUs'
import AboutVaspack2 from './components/AboutVaspack2'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function About() {
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
