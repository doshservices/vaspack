import React from 'react'

const NewsEnergyData = [
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
// border-OtherBlack border-solid border-t-[1px]

export default function NewsEnergy() {
  return (
    <div className=' px-[5%] lg:px-[7%] pt-6 sm:pt-40 md:pt-48 lg:pt-52 xl:pt-56 xxl:48 pb-14 '>
      <section className=' flex flex-col sm:flex-row  justify-between'>
        {NewsEnergyData.map((update) => (
            <div key={update.key} className=' flex flex-col-reverse w-full sm:w-[30%] pt-8 '>
                <div className=' flex flex-row-reverse sm:flex-row justify-between'>
                    <p className=' text-[#666666] text-[0.9rem] ssm:text-base sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-base font-semibold leading-[200%] '>{update.date} </p>
                    <button className=' text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-[0.75rem] xl:text-[0.8rem] leading-00%] border-Secondary hover:border-none hover:bg-Secondary hover:text-NormalWhite text-Secondary font-medium border-solid border-[1.5px] rounded-[4px] px-4 sm:px-2 xl:px-2 py-1 '>Read Post </button>
                </div>
                <div className='update-background uppercase mb-5 sm:mb-3 xl:mb-5  px-[5%] pt-32 sm:pt-16 md:pt-20 pb-3 lg:pb-5 text-OtherWhite leading-[175%] text-[0.9rem] ssm:text-base sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-base font-semibold '>
                    <p className=' w-[80%] ssm:w-[70%] sm:w-full lg:w-[90%] xl:w-[70%]'>{update.text}</p>
                 </div>
            </div>
        ))}
      </section>
      <section className=' flex flex-col sm:flex-row pt-0  justify-between'>
        {NewsEnergyData.map((update) => (
            <div key={update.key} className=' flex flex-col-reverse w-full sm:w-[30%] mt-8 pt-4 border-[#00000034] border-solid border-t-[1px] '>
                <div className=' flex flex-row-reverse sm:flex-row justify-between'>
                    <p className=' text-[#666666] text-[0.9rem] ssm:text-base sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-base font-semibold leading-[200%] '>{update.date} </p>
                    <button className=' text-[0.8rem] ssm:ext-[0.9rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-[0.75rem] xl:text-[0.8rem] leading-00%] border-Secondary hover:border-none hover:bg-Secondary hover:text-NormalWhite text-Secondary font-medium border-solid border-[1.5px] rounded-[4px] px-4 sm:px-2 xl:px-2 py-0 '>Read Post </button>
                </div>
                <div className='update-background uppercase mb-5 sm:mb-3 xl:mb-5  px-[5%] pt-32 sm:pt-16 md:pt-20 pb-3 lg:pb-5 text-OtherWhite leading-[175%] text-[0.9rem] ssm:text-bas sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-base font-semibold '>
                    <p className=' w-[80%] ssm:w-[70%] sm:w-full lg:w-[90%] xl:w-[70%]'>{update.text}</p>
                 </div>
            </div>
        ))}
      </section>
    </div>
  )
}
