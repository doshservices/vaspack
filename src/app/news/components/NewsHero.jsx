import React from 'react'

const Energy = [
    {
        key: 1,
        text: "Energy explained: What is methane, and why do methane emissions need to be addressed?",
        date: "02 Dec, 2024",
        background: "news1-background",
        category: "News Update"
    },
    {
        key: 2,
        text: "Reshaping Reservoirs: Oil & Gas Trends Unleashed",
        date: "02 Dec, 2024",
        background: "news2-background",
        category: "News Update"
    },
    {
        key: 3,
        text: "Oil & Gas Chronicle: Today's Stories, Tomorrow's Energy",
        date: "02 Dec, 2024",
        background: "news3-background",
        category: "News Update"
    },
]

export default function NewsHero() {
  return (
    <div className=' relative mt-16 sm:mt-24 xl:mt-28 mx-0 sm:mx-[5%] '>
      <section className="news-hero flex items-center justify-center  text-NormalWhite h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] pb-[2vh] px-[1.5%]  ">
        <h1 className=" text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] leading-[156%] font-bold ">
        News and Insights
        </h1>
      </section>

      <section className='flex gap-6 sm:gap-0 flex-col sm:flex-row pt-4 sm:pt-0 relative sm:absolute top-[85%] justify-between  px-[5%] lg:px-[10%] text-NormalWhite '>
        {Energy.map((energies) => (
           <div className={`${energies.background} flex flex-col justify-between  h-[15rem] sm:h-[12rem] md:h-[15rem] lg:h-[17rem] xl:h-[20rem] w-full sm:w-[32%] px-[5%] sm:px-[2%] py-4 `} key={energies.key}>
           <p className=" text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-base font-bold ">{energies.text}</p>
           <div className="text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-base h-[30%] flex flex-col justify-between ">
            <p className="  font-medium leading-[162%] ">{energies.date} </p>
             <hr className=" border-[1px] border-solid border-OtherWhite " />
             <div className=' flex items-center justify-between mt-2'>
                <p className=" text-[0.75rem] ssm:text-[0.8rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-[0.8rem]  xl:text-[0.9rem] font-medium leading-[162%] ">{energies.category} </p>
                <button className=' text-[0.75rem] ssm:text-[0.8rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-[0.75rem] xl:text-[0.8rem] leading-[200%] text-NormalWhite border-NormalWhite hover:border-Primary hover:bg-Secondary hover:text-NormalWhite font-medium border-solid border-[1.5px] rounded-[4px] px-2 lg:px-4 py-1 '>Read News </button>
             </div>
           </div>
         </div>
        ))}
      </section>
    </div>
  )
}
