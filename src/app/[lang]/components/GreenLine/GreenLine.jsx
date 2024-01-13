import React from 'react'

export default function GreenLine({text}) {
  return (
    <div className='w-full sm:w-[23%] md:w-[35%] lg:w-[40%]'>
      <hr className=" w-[30%] sm:w-[40%] lg:w-[45%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherGreen " />
          <h2 className=" text-center sm:text-left uppercase text-[1.2rem] sm:text-[0.9rem] md:text-[1.1rem]  lg:text-[1.2rem] xl:text-[1.5rem] mt-2 md:mt-4 font-semibold tracking-[0.199px] leading-[187%] ">
             {text}
          </h2>
    </div>
  )
}
