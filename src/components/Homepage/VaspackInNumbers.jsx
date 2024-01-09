import React from "react";
import Button from "../Button/Button";
import GreenLine from "../GreenLine/GreenLine";
import Link from "next/link";
import Image from "next/image";
 import experience from './assets/experience.svg'
 import truck from './assets/truck.svg'
 import storage from './assets/storage.svg'
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

export default function VaspackInNumbers() {
  return (
    <div className=" bg-[#0A8E26] flex flex-col sm:flex-row justify-between mx-[5%] text-OtherWhite px-[2%] py-10 my-14">
      <section className=" flex flex-col justify-between  text-center sm:text-left ">
        <div>
          <div className="w-full sm:w-[23%] lg:w-[100%]">
            <hr className=" w-[30%] sm:w-[65%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherWhite " />
            <h2 className=" uppercase text-[0.9rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] mt-2 md:mt-3 font-medium tracking-[0.199px] leading-[187%] ">
              VASPACK IN NUMBERS
            </h2>
          </div>
          <p className=" mt-4 text-[1.2rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] font-medium tracking-[0.199px] leading-[123%] ">
            An Integrated Energy Company
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

      <section className=" flex justify-between   w-[70%] border-solid border-[1px] border-OtherWhite ">
          <div className=" flex py-7 w-[33.3%] flex-col gap-4 items-center">
            <div>
              <Image src={experience} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className="flex text-[2.5rem] font-medium "><span><AnimatedCounter start={0} end={20} duration={2} /></span>+</h3>
            <p className=" text-[1.1rem] font-medium ">Years of Experience</p>
          </div>
          <div className=" flex py-7 w-[33.3%] flex-col gap-4 items-center border-solid border-x-[1px] border-OtherWhite ">
            <div>
              <Image src={truck} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className=" flex text-[2.5rem] font-medium ">~<span><AnimatedCounter start={0} end={6000} duration={3} /></span></h3>
            <div className=" text-center">
              <p className=" text-[1.1rem] leading-[20%] font-medium ">Truck Fleet</p>
              <small className=" text-[0.7rem] leading-[20%] mt-[0.3rem] font-medium ">(Including specialized trucks)</small>
            </div>
          </div>
          <div className=" flex py-7 w-[33.3%] flex-col gap-4 items-center">
            <div>
              <Image src={storage} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className="flex text-[2.5rem] font-medium "><span><AnimatedCounter start={0} end={20} duration={2} /></span>+</h3>
            <p  className=" text-[1.1rem] font-medium ">Years of Experience</p>
          </div>
      </section>
    </div>
  );
}
