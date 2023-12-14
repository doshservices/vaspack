import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function TalkToUs({text, link = '/'}) {
  return (
    <Link href="/">
      <section className=" flex justify-between items-center gap-2 md:gap-3">
       <Link href={link} >
       <button className=" text-[0.8rem] lg:text-[0.9rem] leading-[171%] rounded-[4px] px-3 py-1 font-semibold border-NormalWhite border-solid border-[1.5px] ">
        {text}
        </button>
       </Link>
        <button className=" flex items-center text-[0.9rem] lg:text-base px-3 py-2 rounded-[4px] font-semibold border-NormalWhite border-solid border-[1.5px]">
            <IoIosArrowForward />
            <div className='ml-[-8px]'>
            <IoIosArrowForward />
            </div>
        </button>
      </section>
      </Link>
  )
}
