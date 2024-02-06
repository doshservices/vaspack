import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SmallHero from '../../components/SmallHero/SmallHero'
import CommercialBody from './CommercialBody'

export default function Commercial() {
  return (
    <div>
        <Header />
        <SmallHero title="Commercial Terms" background="commercial" />
        <CommercialBody />
        <Footer />
      
    </div>
  )
}
