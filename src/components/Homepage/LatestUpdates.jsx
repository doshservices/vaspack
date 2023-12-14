import React from 'react'
import Button from '../Button/Button'
import GreenLine from '../GreenLine/GreenLine'

const LatestUpdatesData = [
    {
        key: 1,
        date: "DECEMBER 2, 2023",
        text: "Energy explained: What is methane, and why do methane emissions need to be addressed?"
    },
    {
        key: 2,
        date: "DECEMBER 2, 2023",
        text: "Energy explained: What is methane, and why do methane emissions need to be addressed?"
    },
    {
        key: 3,
        date: "DECEMBER 2, 2023",
        text: "Energy explained: What is methane, and why do methane emissions need to be addressed?"
    },
]

export default function LatestUpdates() {
  return (
    <div className='mt-8 ssm:mt-10 sm:mt-12 md:mt-16 lg:mt-20 px-[5%] lg:px-[7%] mb-12 sm:mb-8 lg:mb-12 '>
     <section className="  text-center sm:text-left">
        <GreenLine text="OUR LASTEST UPDATES" />
      </section>

     <section className=' flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between'>
        {LatestUpdatesData.map((update) => (
            <div key={update.key} className=' w-full flex flex-col-reverse sm:block gap-4 sm:gap-0 sm:w-[32%] lg:w-[30%] pt-4 lg:pt-8 '>
                <div className=' flex justify-between'>
                    <p className=' text-[#666666] text-[0.9rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-base font-semibold leading-[200%] '>{update.date} </p>
                    <button className=' text-[0.8rem] md:text-[0.8rem] leading-[200%] border-Secondary hover:border-Secondary hover:bg-Secondary hover:text-NormalWhite text-Secondary font-medium border-solid border-[1.5px] rounded-[4px] px-2 sm:x-1 py-1 md:py-1 lg:px-4  '>Read Post </button>
                </div>
                <div className='update-background uppercase mt-5 lg:mt-6 px-[5%] pt-32 sm:pt-16 md:pt-20 pb-5 text-OtherWhite leading-[175%] text-[0.9rem] sm:text-[0.9rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-base font-semibold '>
                    <p className='w-[90%] lg:w-[70%]'>{update.text}</p>
                 </div>
            </div>
        ))}
      </section>

      <section className='mt-6 md:mt-8 xl:mt-10'> 
        <Button text="View All News" link="/news" />
      </section>
    </div>
  )
}
