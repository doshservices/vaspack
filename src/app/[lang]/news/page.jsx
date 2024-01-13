import Header from '@/components/Header/Header'
import React from 'react'
import NewsHero from './components/NewsHero'
import NewsEnergy from './components/NewsEnergy'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <div>
      <Header />
      <NewsHero />
      <NewsEnergy />
      <Footer />
    </div>
  )
}
