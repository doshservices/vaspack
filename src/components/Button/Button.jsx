import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ text, link= '/' }) {
  return (
    <Link href={link} >
      <button className=' bg-Secondary text-OtherWhite hover:bg-Primary rounded-[4px] py-2 lg:py-3 px-4 lg:px-6 font-medium text-[0.8rem]  xl:text-[0.9rem]'>
      {text}
    </button>
    </Link>
  )
}
