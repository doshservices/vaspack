import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function TalkToUs({text, link = '/'}) {
  return (
    <Link href={link}>
      <section className=" flex justify-center sm:justify-between items-center gap-2 md:gap-3">
       <div>
       <button className=" text-[0.8rem] lg:text-[0.9rem] leading-[171%] rounded-[4px] px-3 py-1 font-semibold border-NormalWhite border-solid border-[1.5px] ">
        {text}
        </button>
       </div>
        <div className=" flex items-center text-[0.9rem] lg:text-base px-3 py-2 rounded-[4px] font-semibold border-NormalWhite border-solid border-[1.5px]">
            <div>
            <IoIosArrowForward />
            </div>
            <div className='ml-[-8px]'>
            <IoIosArrowForward />
            </div>
        </div>
      </section>
      </Link>
  )
}
