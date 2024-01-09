import React from "react";
// import Button from "../Button/Button";
// import GreenLine from "../GreenLine/GreenLine";
import Link from "next/link";
import Image from "next/image";
import experience from "./assets/experience.svg";
import truck from "./assets/truck.svg";
import storage from "./assets/storage.svg";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

export default function VaspackInNumbers() {
  return (
    <div className=" bg-[#0A8E26] flex flex-col sm:flex-row justify-between mx-[5%] text-OtherWhite px-[5%] sm:px-[2%] md:px-[3%] py-6 md:py-8 lg:py-7 my-8 lg:my-12 xl:my-14">
      <section className=" sm:w-[30%] w-[100%] xl:w-[25%] flex flex-col justify-between  text-center sm:text-left ">
        <div className=" ">
          <div className="">
            <hr className=" w-[30%] sm:w-[50%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherWhite " />
            <h2 className=" uppercase text-[1.2rem] sm:text-[0.9rem] md:text-[1.1rem]  lg:text-[1.2rem] xl:text-[1.5rem] mt-2 md:mt-3 font-semibold tracking-[0.199px] leading-[187%] ">
              VASPACK IN NUMBERS
            </h2>
          </div>
          <p className=" text-center sm:text-justify mt-2 xl:mt-2 text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem]  xl:text-[0.9rem] font-normal sm:font-medium tracking-[0.199px] leading-[150%] lg:leading-[180%] xl:leading-[180%] ">
            A quick look into the Metrics Behind Vaspack Energy Limited's
            Growth, Innovation, and Contribution to the Oil & Gas Sector.
          </p>
        </div>

        <div className=" hidden sm:block ">
          <Link href="/about">
            <button className="  text-OtherWhite border-[1.5px] border-OtherWhite border-solid rounded-[4px] py-1 lg:py-2 px-4 lg:px-6 font-semibold text-[0.8rem]  xl:text-[0.9rem]">
              About Us
            </button>
          </Link>
        </div>
      </section>

      <section className=" mt-7 sm:mt-0 flex flex-col sm:flex-row justify-center sm:justify-between text-[0.9rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] w-full sm:w-[68%] md:w-[65%] xl:w-[70%] border-solid border-[1px] border-OtherWhite ">
        <div className=" flex py-7 w-full sm:w-[33.3%] flex-col gap-4 justify-center items-center">
          <div>
            <Image src={experience} className=" w-full" alt="Experience Icon" />
          </div>
          <h3 className="flex text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium ">
            <span>
              <AnimatedCounter start={0} end={20} duration={2} />
            </span>
            +
          </h3>
          <p className=" font-medium ">Years of Experience</p>
        </div>
        <div className=" flex w-full sm:w-[33.3%] py-7 flex-col gap-4 items-center border-solid border-y-[1px]  border-OtherWhite  sm:border-x-[1px]  ">
          <div>
            <Image src={truck} className=" w-full" alt="Experience Icon" />
          </div>
          <h3 className=" flex text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium ">
            ~
            <span>
              <AnimatedCounter start={0} end={6000} duration={3} />
            </span>
          </h3>
          <div className=" text-center">
            <p className=" leading-[20%] font-medium ">
              Truck Fleet
            </p>
            <small className=" text-[0.7rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.7rem] leading-[20%] mt-[0.3rem] font-medium ">
              (Including specialized trucks)
            </small>
          </div>
        </div>
        <div className=" flex w-full sm:w-[33.3%] py-7  flex-col gap-4 items-center">
          <div>
            <Image src={storage} className=" w-full" alt="Experience Icon" />
          </div>
          <h3 className="flex text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium ">
            <span>
              <AnimatedCounter start={1000} end={3480} duration={3} />
            </span>
            km
          </h3>
          <p className=" font-medium ">Storage Capacity</p>
        </div>
      </section>

      <section className=" mt-7 flex justify-center">
      <div className=" block sm:hidden ">
          <Link href="/about">
            <button className="  text-OtherWhite border-[1.5px] border-OtherWhite border-solid rounded-[4px] py-1 lg:py-2 px-4 lg:px-6 font-semibold text-[0.9rem]">
              About Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
