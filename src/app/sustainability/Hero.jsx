import React from 'react'

export default function SustainabilityHero() {
  const rootStyle = ` flex items-center justify-center mx-0 sm:mx-[5%] mb-4 sm:mb-8 text-NormalWhite h-[80vh] sm:h-[60vh] ssm:h-[60vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh] pb-[2vh] px-[3%] sm:px-[1.5%] mt-12 ssm:mt-16 sm:mt-20 md:mt-24 lg:mt-28 home-hero `

  return (
    <div className={rootStyle}>
    <section className=" w-full flex justify-center ">
      <h1 className="  text-[1.2rem] ssm:text-[1.4rem] uppercase sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] leading-[171%] font-bold ">
        Coming Soon
      </h1>
    </section>
  </div>
  )
}