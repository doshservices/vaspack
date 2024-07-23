import Header from '../Header/Header'
// import Hero from './Hero'
import VaspackInNumbers from './VaspackInNumbers'
import WhatWeOffer from './WhatWeOffer'
import Footer from '../Footer/Footer'
import HeroPrevious from './HeroPrevious'

export default function HomePage() {
  return (
    <body>
      <Header />
      {/* <Hero /> */}

      <HeroPrevious />
      <VaspackInNumbers />
      <WhatWeOffer />
      <Footer />
  </body>
  )
}
