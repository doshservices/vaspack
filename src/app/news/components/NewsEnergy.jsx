import React from "react";

const NewsEnergyData = [
  {
    key: 1,
    date: "DECEMBER 2, 2023",
    background: "update1",
    text: "Beyond the Barrel: Navigating Oil & Gas Trends",
  },
  {
    key: 2,
    date: "DECEMBER 2, 2023",
    background: "update2",
    text: "Fueling Change: Spotlight on Oil & Gas Dynamics",
  },
  {
    key: 3,
    date: "DECEMBER 2, 2023",
    background: "update3",
    text: "Oil & Gas Chronicle: Today's Stories, Tomorrow's Energy",
  },
];
// border-OtherBlack border-solid border-t-[1px]

export default function NewsEnergy() {
  return (
    <div className=" px-[5%]  pt-6 sm:pt-40 md:pt-48 lg:pt-52 xl:pt-64 mb-6 xl:mb-7 ">
      <section className=" flex flex-col sm:flex-row  justify-between">
        {NewsEnergyData.map((update) => (
          <div
            key={update.key}
            className=" flex flex-col-reverse w-full sm:w-[30%] pt-8 "
          >
            <div className=" flex items-center sm:flex-row justify-between">
              <button className=" text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-[0.75rem] xl:text-[0.8rem] leading-00%] border-Secondary hover:border-none hover:bg-Secondary hover:text-NormalWhite text-Secondary font-medium border-solid border-[1.5px] rounded-[4px] px-4 sm:px-2 xl:px-2 py-1 ">
                Read Post{" "}
              </button>
              <p className=" text-[#666666] text-[0.9rem] ssm:text-base sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-base font-bold leading-[200%] ">
                {update.date}{" "}
              </p>
            </div>
            <div
              className={`${update.background} uppercase mb-5 sm:mb-3 xl:mb-5  px-[5%] pt-32 sm:pt-16 md:pt-20 pb-3 lg:pb-5 text-OtherWhite leading-[175%] text-[0.9rem] ssm:text-base sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-base font-semibold `}
            >
              <p className=" w-[80%] ssm:w-[70%] sm:w-full lg:w-[90%] xl:w-[70%]">
                {update.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
