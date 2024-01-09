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
    <div className=" bg-[rgb(10,142,38)] mx-[5%] px-[2%] pt-10 my-14 text-OtherWhite ">
      <section>
        <div className="w-full sm:w-[23%] lg:w-[100%]">
          <hr className=" w-[30%] sm:w-[15%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherWhite " />
          <h2 className=" uppercase text-[1.2rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] mt-2 md:mt-3 font-semibold tracking-[0.199px] leading-[187%] ">
            ABOUT VASPACK
          </h2>
        </div>
        <p className=" mt-4 text-[1.2rem] sm:text-[1rem]  xl:text-[1rem] font-medium tracking-[0.199px] leading-[123%] ">
          Vaspack Energy Limited doesn't merely distribute fuel; we empower
          industries and communities with a seamless, technology-driven
          approach.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row justify-between   pt-3 pb-10 ">
        <section className=" flex justify-between   w-[100%] border-solid border-[1px] border-OtherWhite ">
          <div className=" flex py-7 border-solid border-r-[1px] border-OtherWhite w-[33.3%] flex-col gap-4 items-center">
            <div>
              <Image
                src={experience}
                className=" w-full"
                alt="Experience Icon"
              />
            </div>
            <h3 className=" flex text-[2.5rem] font-medium "><span><AnimatedCounter start={0} end={20} duration={2} /></span>+</h3>
            <p className=" text-[1.1rem] font-medium ">Years of Experience</p>
          </div>
          <div className=" flex py-7 w-[33.3%] flex-col gap-4 items-center">
            <div>
              <Image src={gas} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className=" flex text-[2.5rem] font-medium "><span><AnimatedCounter start={0} end={20} duration={2} /></span>+</h3>
            <p className=" text-[1.1rem] font-medium ">Retail Stores</p>
          </div>
          <div className=" flex py-7 w-[33.3%] flex-col gap-4 items-center border-solid border-x-[1px] border-OtherWhite ">
            <div>
              <Image src={truck} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className=" flex text-[2.5rem] font-medium ">~<span><AnimatedCounter start={0} end={6000} duration={3} /></span></h3>
            <div className=" text-center">
              <p className=" text-[1.1rem] leading-[20%] font-medium ">
                Truck Fleet
              </p>
              <small className=" text-[0.7rem] leading-[20%] mt-[0.3rem] font-medium ">
                (Including specialized trucks)
              </small>
            </div>
          </div>
          <div className=" flex py-7 w-[33.3%] flex-col gap-4 items-center">
            <div>
              <Image src={storage} className=" w-full" alt="Experience Icon" />
            </div>
            <h3 className=" flex text-[2.5rem] font-medium "><span><AnimatedCounter start={0} end={20} duration={2} /></span>+</h3>
            <p className=" text-[1.1rem] font-medium ">Years of Experience</p>
          </div>
        </section>
      </div>
    </div>
  );
}
