"use client"

import React from 'react'
import TalkToUs from '../Button/TalkToUs'
import CountUp from 'react-countup'
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'



export default function BusinessOffer({title, text, background, ButtonText, link, height }) {
  return (
    <section className={`${background} ${height} mt-5 sm:h-[67vh] md:h-[57vh] lg:h-[60vh] xl:h-[70vh] xxl:h-[65vh] py-4 sm:py-7 px-[5%] text-center sm:text-left  sm:px-[2%] text-OtherWhite flex items-center sm:items-end gap-7 sm:gap-0 flex-col sm:flex-row justify-center sm:justify-between`}>
        <div className=" w-full sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[70%] xxl:w-[60%] flex flex-col  justify-end gap-4 sm:gap-4 md:gap-4 lg:gap-7 ">
          <div>
            <h2 className=" text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] font-semibold leading-[145%] ">{title} </h2>
            <p className="mt-3 lg:mt-4 text-[0.8rem] text-center sm:text-justify lg:text-[0.9rem] font-medium leading-[170%] ssm:leading-[190%] sm:leading-[214%] ">
              {text}
            </p>
          </div>

          <div className=" flex justify-center sm:justify-start gap-4 sm:gap-4 md:gap-6 lg:gap-8  text-[0.6rem] ssm:text-[0.7rem] lg:text-[0.8rem] font-semibold leading-[180%] ">
            <div>
                <h3 className=" flex justify-center text-center text-[1.3rem] ssm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-semibold leading-[160%] "><span><AnimatedCounter start={0} end={20} duration={3} /></span></h3>
                <p className=' text-center'>Nationwide Depot</p>
            </div>
            <div className=" border-NormalWhite border-r-[3px] border-solid "/>
            <div>
                <h3 className="flex justify-center text-center text-[1.3rem] ssm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-semibold leading-[160%] "><span><AnimatedCounter start={0} end={10} duration={5} /></span></h3>
                <p className=' text-center'>Tankers</p>
            </div>
          </div>
        </div>

        <div className=" flex items-end ">
            <TalkToUs text={ButtonText} link={link} />
        </div>
      </section>
  )
}
