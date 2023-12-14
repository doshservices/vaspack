import React from "react";

export default function IndustriesCard({text, title, background}) {
  return (
    <div className={`${background} px-[4%] py-4 sm:py-7 mb-4 sm:mb-0 flex justify-between flex-col h-full text-OtherWhite  text-[0.8rem] ssm:text-[0.85rem] xl:text-[0.9rem] leading-[214%] font-medium text-justify  `}>
      <div>
        <h3 className="text-[1.1rem] ssm:text-[1.2rem] md:text-[1.3rem] xl:text-[1.4rem] leading-[145%] font-semibold ">
          {title} 
        </h3>
        <p className=" w-full md:w-[90%] lg:w-[80%] pt-3 xl:pt-4 ">
          {text}
        </p>
      </div>

      <div className=" pt-12 ssm:pt-14 sm:pt-0 flex justify-between sm:justify-start gap-0 sm:gap-4 lg:gap-8  text-[0.6rem] ssm:text-[0.65rem] md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] font-semibold leading-[138%] ">
        <div>
          <h3 className=" text-[1rem] ssm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] font-semibold leading-[114%] ">~60</h3>
          <p>Nationwide Depot</p>
        </div>
        <div className=" border-NormalWhite border-r-[3px] border-solid " />
        <div>
          <h3 className=" text-[1rem] ssm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] font-semibold leading-[114%] ">
            ~100+
          </h3>
          <p>Tankers</p>
        </div>
        <div className=" border-NormalWhite border-r-[3px] border-solid " />
        <div>
          <h3 className=" text-[1rem] ssm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] font-semibold leading-[114%] ">
            ~100+
          </h3>
          <p>Retail outlet</p>
        </div>
      </div>
    </div>
  );
}
