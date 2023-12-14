import Header from '@/components/Header/Header'
import React from 'react'
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <div>
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  )
}
