import React from "react";
import Button from "../Button/Button";
import GreenLine from "../GreenLine/GreenLine";

export default function InNumbers() {
  return (
    <div className=" flex flex-col sm:flex-row justify-between px-[7%] py-8">
      <section className=" flex flex-col justify-between  text-center sm:text-left text-OtherBlack">
        <div>
          <div className="w-full sm:w-[23%] lg:w-[100%]">
            <hr className=" w-[30%] sm:w-[65%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherGreen " />
            <h2 className=" uppercase text-[0.9rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] mt-2 md:mt-3 font-medium tracking-[0.199px] leading-[187%] ">
              VASPACK IN NUMBERS 
            </h2>
          </div>
          <p className=" mt-4 text-[1.2rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] font-medium tracking-[0.199px] leading-[123%] ">
            An Integrated Energy Company
          </p>
        </div>

        <div className=" hidden sm:block ">
          <Button text="About Us" link="/about" />
        </div>
      </section>

      <section className="w-[100%] sm:w-[75%] pt-3 sm:pt-0 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between text-NormalWhite text-[1rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-base">
        <div className="years-background flex flex-col justify-between h-[12rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] w-full sm:w-[32%] px-[2%] py-4 ">
          <p className=" font-bold ">Years of Experience</p>
          <div className=" h-[22%] sm:h-[27.5%] flex flex-col justify-between ">
            <hr className=" mb-6 border-[1px] border-solid border-OtherWhite " />
            <strong className="font-medium  text-[1.1rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] justify-self-end ">
              Over 20 years
            </strong>
          </div>
        </div>

        <div className="truck-background flex flex-col justify-between h-[12rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] w-full sm:w-[32%] px-[2%] py-4 ">
          <p className="  font-bold ">Truck Fleet</p>
          <div className=" h-[22%] sm:h-[27.5%] flex flex-col justify-between ">
            <hr className="  border-[1px] border-solid border-OtherWhite " />
            <div className="justify-self-end">
              <strong className="font-medium  text-[1.1rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] justify-self-end ">
                ~6000 Trucks
              </strong>
              <p className="font-medium  text-[0.55rem] md:text-[0.65rem] lg:text-[0.8rem] leading-none ">
                (Including specialized trucks)
              </p>
            </div>
          </div>
        </div>

        <div className="storage-background flex flex-col justify-between h-[12rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] w-full sm:w-[32%] px-[2%] py-4 ">
          <p className="  font-bold ">Storage Capacity</p>
          <div className=" h-[20%2 sm:h-[27.5%] flex flex-col justify-between ">
            <hr className=" border-[1px] border-solid border-OtherWhite " />
            <strong className="font-medium  text-[1.1rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] justify-self-end ">
              3048 km3
            </strong>
          </div>
        </div>
      </section>
      <div className="mt-5 text-center block sm:hidden ">
        <Button text="About Us" />
      </div>
    </div>
  );
}
