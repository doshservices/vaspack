import React from "react";

export default function   AboutVaspack() {
  return (
    <div className="px-[5%] lg:px-[7%] pt-5">
      <h2 className=" text-OtherBlack text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] font-medium leading-[166%] tracking-[0.199px] text-justify ">
        Vaspack Energy Limited doesn't merely distribute fuel; we empower
        industries and communities with a seamless, technology-driven approach.
      </h2>

      <section className="pt-5 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between text-NormalWhite ">
        <div className="years-background flex flex-col justify-between h-[15rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] w-full sm:w-[23.5%] px-[2%] py-4 ">
          <p className=" text-[1rem] sm:text-[0.85rem] lg:text-base font-bold ">Years of Experience</p>
          <div className="text-base h-[25%] sm:h-[30%] lg:h-[27.5%] flex flex-col justify-between ">
            <hr className=" mb-6 border-[1px] border-solid border-OtherWhite " />
            <strong className="font-medium  text-[1.1rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem]  xl:text-[1.3rem] justify-self-end ">Over 20 years</strong>
          </div>
        </div>

        <div className="years-background flex flex-col justify-between h-[15rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] w-full sm:w-[23.5%] px-[2%] py-4 ">
          <p className=" text-[1rem] sm:text-[0.85rem] lg:text-base font-bold ">Retail Stores</p>
          <div className="text-base h-[25%] sm:h-[30%] lg:h-[27.5%] flex flex-col justify-between ">
            <hr className=" mb-6 border-[1px] border-solid border-OtherWhite " />
            <strong className="font-medium  text-[1.1rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] justify-self-end ">~70 Outlets</strong>
          </div>
        </div>

        <div className="truck-background flex flex-col justify-between h-[15rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] w-full sm:w-[23.5%] px-[2%] py-4 ">
          <p className=" text-[1rem] sm:text-[0.85rem] lg:text-base font-bold ">Truck Fleet</p> 
          <div className="text-base h-[25%] sm:h-[30%] lg:h-[27.5%] flex flex-col justify-between ">
            <hr className="  border-[1px] border-solid border-OtherWhite " />
            <div className="justify-self-end">
            <strong className="font-medium  text-[1.1rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem]  xl:text-[1.3rem] ">~6000 Trucks</strong>
            <p className="font-medium  text-[0.6rem] lg:text-[0.7rem] xl:text-[0.8rem] leading-none ">(Including specialized trucks)</p>
            </div>
          </div>
        </div>

        <div className="storage-background flex flex-col justify-between h-[15rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] w-full sm:w-[23.5%] px-[2%] py-4 ">
          <p className=" text-[1rem] sm:text-[0.85rem] lg:text-base font-bold ">Storage Capacity</p>
          <div className="text-base h-[25%] sm:h-[30%] lg:h-[27.5%] flex flex-col justify-between ">
            <hr className=" border-[1px] border-solid border-OtherWhite " />
            <strong className="font-medium text-[1.1rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem]  xl:text-[1.3rem] justify-self-end ">3048 km3</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
