import React from 'react'
import ProductsHero from '../components/ProductsHero'
import ProductsBody from '../components/ProductsBody'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import ProductsOtherBody from '../components/ProductOtherBody'
import GasCylinder from '../../../components/BusinessOffer/GasCylinder'



export default function Liquefied() {
  return (
    <div>
      <div>
      <Header />
      <ProductsHero
        title="Liquefied Petroleum Gas"
        background="liquefied-hero"
        text="Vaspack Energy Limited is an indigenous downstream company in the Oil & Gas sector with interests in procurement, marketing and distribution of Petroleum Products (Automotive Gas Oil (AGO), Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using innovative technology."
      />
      <ProductsOtherBody
      firstTitle="Liquefied Petroleum Gas"
      firstText="Experience a seamless and convenient gas supply, tailored to meet all your needs - whether small or bulk, residential or commercial. Our unwavering commitment guarantees swift delivery right to your doorstep or the option to visit our outlet with zero delays. Place your order now to enjoy the benefits of instant delivery."
      secondTitle="Our LPG Services"
      secondTopText="We provide the following types of services to cater for your LPG
      needs for domestic and industrial purposes:"
      downText1="Sales and Service of assorted cylinders & Accessories."
      downText2="Cylinder Installation."
      downText3="Retail of Domestic & Bulk Cooking Gas."
      downText4="General LPG Solutions."
      downText5="Specialized Solutions."
      downText6="LPG Consultancy Services."
      // downText7="none"
      />
      <section className=' px-[5%] pb-7'>
        <GasCylinder title="We are closer to you than you think" background="gas2" link="/order" />
      </section>
      <Footer />
    </div>
    </div>
  )
}
