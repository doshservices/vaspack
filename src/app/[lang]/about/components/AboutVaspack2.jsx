import React from "react";
// import GreenLine from "../../../components/GreenLine/GreenLine";
import Link from "next/link";
import Image from "next/image";
import experience from "../assets/experience.svg";
import truck from "../assets/truck.svg";
import storage from "../assets/storage.svg";
import gas from "../assets/gas.svg";
import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";

export default function AboutVaspack2() {
  return (
    <div className=" bg-[rgb(10,142,38)] mx-[5%] px-[5%] sm:px-[2%] py-7 mt-6 xl:mt-7 text-OtherWhite ">
      <section>
        <div className="w-full sm:w-[30%] md:w-[35%] lg:w-[30%]">
          {/* <hr className=" w-[30%] sm:w-[15%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherWhite " />
          <h2 className=" uppercase text-[1.2rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] mt-2 md:mt-3 font-semibold tracking-[0.199px] leading-[187%] ">
            ABOUT VASPACK
          </h2> */}
          <hr className=" w-[30%] sm:w-[40%] lg:w-[65%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherWhite " />
          <h2 className=" uppercase text-[1.2rem] sm:text-[0.9rem] md:text-[1.1rem]  lg:text-[1.2rem] xl:text-[1.5rem] mt-2 md:mt-4 font-semibold tracking-[0.199px] leading-[187%] ">
          ABOUT VASPACK
          </h2>
        </div>
        <p className=" mt-3 xl:mt-4 text-[0.9rem] sm:text-[0.9rem] text-justify  xl:text-[1rem] font-medium tracking-[0.199px] leading-[123%] ">
          Vaspack Energy Limited doesn't merely distribute fuel; we empower
          industries and communities with a seamless, technology-driven
          approach.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row justify-between mt-4  pt-3  ">
        <section className=" flex flex-col sm:flex-row justify-between  text-[0.9rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] w-[100%] border-solid border-[1px] border-OtherWhite ">
          <div className=" flex py-7  border-solid border-r-[1px] border-OtherWhite w-full sm:w-[33.3%] flex-col gap-4 items-center">
            <div>
              <Image
                src={experience}
                className=" w-full"
                alt="Experience Icon"
              />
            </div>
            <h3 className=" flex text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium "><span><AnimatedCounter start={0} end={2} duration={2} /></span>+</h3>
            <p className=" font-medium ">Years of Experience</p>
          </div>
          <div className=" flex py-7 w-full border-y-[1px] border-solid border-OtherWhite sm:border-none sm:w-[33.3%] flex-col gap-4 items-center">
            <div>
              <Image src={gas} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className=" flex text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium "><span><AnimatedCounter start={0} end={20} duration={2} /></span>+</h3>
            <p className=" font-medium ">Nationwide Depots</p>
          </div>
          <div className=" flex py-7 w-full sm:w-[33.3%] flex-col gap-4 items-center border-solid border-x-[1px] border-OtherWhite ">
            <div>
              <Image src={truck} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className=" flex text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium "><span><AnimatedCounter start={0} end={10} duration={2} /></span></h3>
            <div className=" text-center">
              <p className=" leading-[20%] font-medium ">
                Truck Fleet
              </p>
              <small className=" text-[0.7rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.7rem] leading-[20%] mt-[0.3rem] font-medium ">
                (Including specialized trucks)
              </small>
            </div>
          </div>
          <div className=" flex py-7 border-t-[1px] border-solid border-OtherWhite sm:border-none w-full sm:w-[33.3%] flex-col gap-4 items-center">
            <div>
              <Image src={storage} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className=" flex text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium "><span><AnimatedCounter start={1000} end={3048} duration={5} /></span>Km</h3>
            <p className=" font-medium ">Storage Capacity</p>
          </div>
        </section>
      </div>
    </div>
  );
}
