import TalkToUs from '@/components/Button/TalkToUs'
import React from 'react'

export default function ProductsHero({ title, text, background }) {
  const rootStyle = ` flex flex-col pb-4 gap-10 sm:gap-0 sm:flex-row items-center sm:items-end justify-center sm:justify-between mx-0 sm:mx-[5%] text-NormalWhite h-[30rem] ssm:h-[34rem] sm:h-[50vh] lg:h-[65vh] xl:h-[80vh] xxl:h-[75vh] pb-[2vh] px-[3%] sm:px-[1.5%] mt-12 ssm:mt-16 sm:mt-20 md:mt-24 lg:mt-28 ${background} `

  return (
    <div className={rootStyle}>
    <section className=" text-center sm:text-left w-full sm:w-[68%] xl:w-[55%]">
      <h1 className=" px-[5%] sm:px-0 text-[1.3rem] ssm:text-[1.4rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] leading-[171%] font-bold ">
        {title}
      </h1>
      <p className="px-[3%] text-justify sm:px-0 text-[0.9rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.9rem] font-semibold leading-[200%] mt-6 ssm:mt-8   sm:mt-2 md:mt-4 ">
        {text}
      </p>
    </section>
    <div className=' flex justify-center sm:justify-start'>
    <TalkToUs text="Contact Us" link='/contact' />
    </div>
  </div>
  )
}
