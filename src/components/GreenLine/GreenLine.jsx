import React from 'react'

export default function GreenLine({text}) {
  return (
    <div className='w-full sm:w-[23%] lg:w-[30%]'>
      <hr className=" w-[30%] sm:w-[65%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherGreen " />
          <h2 className=" uppercase text-[0.9rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] mt-2 md:mt-4 font-medium tracking-[0.199px] leading-[187%] ">
             {text}
          </h2>
    </div>
  )
}
