import Header from '@/components/Header/Header'
import React from 'react'
import ProductsHero from '../components/ProductsHero'
import ProductsBody from '../components/ProductsBody'
import Footer from '@/components/Footer/Footer'


export default function page() {
  return (
    <div>
      <div>
      <Header />
      <ProductsHero
        title="Lubricants"
        background="lubricants-hero"
        text="Vaspack Energy Limited is an indigenous downstream company in the Oil & Gas sector with interests in procurement, marketing and distribution of Petroleum Products (Automotive Gas Oil (AGO), Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using innovative technology."
      />
      <ProductsBody />
      <Footer />
    </div>
    </div>
  )
}
