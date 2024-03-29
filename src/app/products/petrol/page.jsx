import React from 'react'
import ProductsHero from '../components/ProductsHero'
import ProductsBody from '../components/ProductsBody'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'



export default function Petrol() {
  return (
    <div>
      <div>
      <Header />
      <ProductsHero
        title="Premium Motor Spirits - Petrol"
        background="petrol-hero"
        text="Vaspack Energy Limited is an indigenous downstream company in the Oil & Gas sector with interests in procurement, marketing and distribution of Petroleum Products (Automotive Gas Oil (AGO), Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using innovative technology."
      />
      <ProductsBody title="Premium Motor Spirits - Petrol" />
      <Footer />
    </div>
    </div>
  )
}
