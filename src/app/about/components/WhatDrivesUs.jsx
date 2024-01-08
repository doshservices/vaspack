import GreenLine from "@/components/GreenLine/GreenLine";
import React from "react";

export default function WhatDrivesUs() {
  return (
    <div className=" px-[7%] mt-12 lg:mt-16 xl:mt-20 mb-10 lg:mb-12 ">
      <section>
        <div className=" ">
          <GreenLine text=" WHAT DRIVES US" />
        </div>
        <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
          We are driven and united by our Mission and Vision
        </p>
      </section>
      <section className=" mt-5 gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between ">
        <div className="mission w-full flex flex-col justify-center gap-24 sm:gap-0 sm:block sm:w-[48%] px-[4%] ssm:px-[2%] pt-4 lg:pt-7  pb-4 sm:pb-28 md:pb-40 lg:pb-48 text-OtherWhite ">
          <h3 className=" text-[1.1rem] ssm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] leading-[145%] font-semibold ">
            Our Mission
          </h3>
          <p className=" text-[0.8rem] ssm:text-[0.9rem] leading-[214%] font-medium mt-4 xl:mt-5 ">
            Building a sustainable energy business driven by efficiency, quality
            and, above all, strong business ethics.
          </p>
        </div>
        <div className="vision w-full flex flex-col justify-center gap-24  sm:gap-0 sm:block sm:w-[48%] px-[4%] ssm:px-[2%] pt-4 lg:pt-7 pb-4 sm:pb-28 md:pb-40 lg:pb-48 text-OtherWhite ">
          <h3 className=" text-[1.1rem] ssm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] leading-[145%] font-semibold ">
            Our Vision
          </h3>
          <p className=" text-[0.8rem] ssm:text-[0.9rem] leading-[214%] font-medium mt-4 xl:mt-5 ">
            To be the go-to integrated energy solutions provider in Africa
          </p>
        </div>
      </section>
    </div>
  );
}