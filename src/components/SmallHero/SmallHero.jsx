import React from 'react'

export default function SmallHero({ title, background }) {
  const rootStyle = ` flex  pb-4  sm:flex-row items-center justify-center mx-0 sm:mx-[5%] text-NormalWhite h-[15rem] sm:h-[20vh] lg:h-[23vh]  xxl:h-[25vh] pb-[2vh] px-[3%] mt-12 ssm:mt-16 sm:mt-20 md:mt-24 lg:mt-28 ${background} `

  return (
    <div className={rootStyle}>
    <section className=" text-center ">
      <h1 className=" sm:px-0 text-[1.2rem] ssm:text-[1.2rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] leading-[171%] font-bold ">
        {title}
      </h1>
    </section>
  </div>
  )
}
