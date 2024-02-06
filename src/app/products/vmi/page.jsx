import React from 'react'
import ProductsHero from '../components/ProductsHero'
import ProductsBody from '../components/ProductsBody'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import ProductsOtherBody from '../components/ProductOtherBody'
import GasCylinder from '../../../components/BusinessOffer/GasCylinder'



export default function VMI() {
  return (
    <div>
      <div>
      <Header />
      <ProductsHero
        title="Vendor Managed Inventory (VMI)"
        background="vmi"
        text="Our Vendor Managed Inventory (VMI) services goes beyond the conventional by not only supplying and installing equipment at your facility but also providing on-site staff for meticulous management of your bulk fuels."
      />
      <ProductsOtherBody
      firstTitle="Vendor Managed Inventory (VMI)"
      firstText="In the ever-evolving realm of the oil and gas industry, our Vendor Managed Inventory (VMI) services stand as a beacon of efficiency and dependability. As your strategic ally, we redefine the supply and installation process, ensuring state-of-the-art equipment seamlessly integrates into your facility for heightened operational capabilities. Beyond mere provision, our dedicated on-site staff specializes in the precise management of bulk fuels, promoting optimal performance and operational fluidity."
      secondTitle="Our VMI Services"
      secondTopText="We provide the following types of services to cater for your needs for domestic and industrial purposes:"
      downText1="Supply and installation of equipment at your facility."
      downText2="Provision of on-site staff to manage your bulk fuels"
      downText3="Uninterrupted certiﬁed quality product supply"
      downText4="Improved supply chain efﬁciency"
      downText5="24 hrs after sales services"
      downText6="Price stability"
      downText7="HSE implementation"
      />
      <Footer />
    </div>
    </div>
  )
}
