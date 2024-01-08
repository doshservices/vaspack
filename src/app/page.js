import React from 'react'
import Header from "@/components/Header/Header";
import Hero from '@/components/Homepage/Hero';
import Footer from '@/components/Footer/Footer';
// import InNumbers from '@/components/Homepage/InNumbers';
import WhatWeOffer from '@/components/Homepage/WhatWeOffer';
import LatestUpdates from '@/components/Homepage/LatestUpdates';
import VaspackInNumbers from '@/components/Homepage/VaspackInNumbers';



export default function Home() {
  return (
    <body suppressHydrationWarning className=" ">
      <Header />
      <Hero />
      <VaspackInNumbers />
      <WhatWeOffer />
      <LatestUpdates />
      <Footer />
    </body>
  )
}
