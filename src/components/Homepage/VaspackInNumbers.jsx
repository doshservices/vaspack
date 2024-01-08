import React from "react";
import Button from "../Button/Button";
import GreenLine from "../GreenLine/GreenLine";
import Link from "next/link";
import Image from "next/image";

export default function VaspackInNumbers() {
  return (
    <div className=" bg-[#0A8E26] flex flex-col sm:flex-row justify-between mx-[5%] text-OtherWhite px-[2%] py-8 my-8">
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
          <Link href="/">
            <button className="  text-OtherWhite border-[1px] border-OtherWhite border-solid rounded-[4px] py-2 lg:py-3 px-4 lg:px-6 font-medium text-[0.8rem]  xl:text-[0.9rem]">
              About Us
            </button>
          </Link>
        </div>
      </section>

      <section>
          <div>
            <div>
              <Image src="" alt="" />
            </div>
            <h3>20+</h3>
            <small>Years of Experience</small>
          </div>
      </section>
    </div>
  );
}
