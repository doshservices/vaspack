import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

export default function Header() {
  return (
    <div>
      <section className=' hidden sm:block'>
        <HeaderDesktop />
      </section>
      <section className=' block sm:hidden'>
        <HeaderMobile />
      </section>
    </div>
  )
}
