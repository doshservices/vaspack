import React from 'react'
import Header from '../../components/Header/Header'
import SmallHero from '../../components/SmallHero/SmallHero'
import Footer from '../../components/Footer/Footer'
import OrderBody from './OrderBody'

export default function Order() {
  return (
    <div>
      <Header />
        <SmallHero title="Liquefied Petroleum Gas - Retail & Wholesale Request Form" background="order" />
        <OrderBody />
        <Footer />
    </div>
  )
}
