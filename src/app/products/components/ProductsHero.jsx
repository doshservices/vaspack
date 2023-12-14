import TalkToUs from '@/components/Button/TalkToUs'
import React from 'react'

export default function ProductsHero({ title, text, background }) {
  const rootStyle = ` flex flex-col gap-4 ssm:gap-8 sm:gap-0 sm:flex-row items-end justify-center sm:justify-between mx-0 sm:mx-[5%] text-NormalWhite h-[80vh] sm:h-[60vh] ssm:h-[60vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh] pb-[2vh] px-[3%] sm:px-[1.5%] mt-12 ssm:mt-16 sm:mt-20 md:mt-24 lg:mt-28 ${background} `

  return (
    <div className={rootStyle}>
    <section className=" w-full sm:w-[68%] xl:w-[55%]">
      <h1 className="  text-[1.2rem] ssm:text-[1.4rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] leading-[171%] font-bold ">
        {title}
      </h1>
      <p className=" text-[0.7rem] ssm:text-[0.8rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.9rem] font-semibold leading-[200%] mt-2 md:mt-4 ">
        {text}
      </p>
    </section>
    <TalkToUs text="Talk To Us" link='/contact' />
  </div>
  )
}
