
import React from 'react'
import NewsHero from './components/NewsHero'
import NewsEnergy from './components/NewsEnergy'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


export default function News() {
  return (
    <div>
      <Header />
      <NewsHero />
      <NewsEnergy />
      <Footer />
    </div>
  )
}
