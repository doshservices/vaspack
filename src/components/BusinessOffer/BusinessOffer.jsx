"use client"

import React from 'react'
import TalkToUs from '../Button/TalkToUs'
import CountUp from 'react-countup'
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'



export default function BusinessOffer({title, text, background, ButtonText, link }) {
  return (
    <section className={`${background} mt-5 h-[70vh] sm:h-[70vh] py-4 sm:py-7 px-[4%]  sm:px-[2%] text-OtherWhite flex gap-14 sm:gap-0 flex-col sm:flex-row justify-between`}>
        <div className=" w-full sm:w-[65%] lg:w-[55%] flex flex-col justify-end gap-7 ">
          <div>
            <h2 className=" text-[1.1rem] sm:text-[1.3rem] lg:text-[1.4rem] font-semibold leading-[145%] ">{title} </h2>
            <p className="mt-3 lg:mt-5 text-[0.8rem] text-justify sm:text-left lg:text-[0.9rem] font-medium leading-[214%] ">
              {text}
            </p>
          </div>

          <div className=" flex justify-between sm:justify-start gap-0 sm:gap-4 md:gap-6 lg:gap-8  text-[0.6rem] ssm:text-[0.7rem] lg:text-[0.8rem] font-semibold leading-[138%] ">
            <div>
                <h3 className=" flex text-[1.1rem] ssm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-semibold leading-[114%] ">~<span><AnimatedCounter start={0} end={60} duration={2.5} /></span></h3>
                <p className=' text-center'>Nationwide Depot</p>
            </div>
            <div className=" border-NormalWhite border-r-[3px] border-solid "/>
            <div>
                <h3 className="flex text-[1.1rem] ssm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-semibold leading-[114%] ">~<span><AnimatedCounter start={0} end={100} duration={5} /></span>+</h3>
                <p className=' text-center'>Tankers</p>
            </div>
            <div className=" border-NormalWhite border-r-[3px] border-solid "/>
            <div>
                <h3 className="flex text-[1.1rem] ssm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-semibold leading-[114%] ">~<span><AnimatedCounter start={0} end={100} duration={5} /></span>+</h3>
                <p className=' text-center'>Retail outlet</p>
            </div>
          </div>
        </div>

        <div className=" flex items-end ">
            <TalkToUs text={ButtonText} link={link} />
        </div>
      </section>
  )
}
