/* eslint-disable react/no-unescaped-entities */
import experience from "./assets/experience.svg";
import truck from "./assets/truck.svg";
import storage from "./assets/storage.svg";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";
import { Link } from "react-router-dom";
// import InNumber from './assets/InNumbers.jpg'

export default function VaspackInNumbers() {
  return (
    <div className=" bg-[#0A8E26] flex flex-col sm:flex-row justify-between mx-[5%] text-OtherWhite px-[5%] sm:px-[2%] md:px-[3%] py-6 md:py-8 lg:py-7 my-6 xl:my-7">
      <section className=" sm:w-[30%] w-[100%] xl:w-[28%] flex flex-col justify-between  text-center sm:text-left ">
        <div className=" ">
          <div className="">
            <hr className=" w-[30%] sm:w-[50%] mx-auto sm:mx-0 border-solid border-[2px] border-OtherWhite " />
            <h2 className=" uppercase text-[1.2rem] sm:text-[0.9rem] md:text-[1.1rem]  lg:text-[1.2rem] xl:text-[1.4rem] mt-2 md:mt-3 font-semibold tracking-[0.199px] leading-[187%] ">
              VASPACK IN NUMBERS
            </h2>
          </div>
          <p className=" text-center sm:text-justify mt-2 xl:mt-2 text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem]  xl:text-[0.9rem] font-normal sm:font-medium tracking-[0.199px] leading-[150%] lg:leading-[180%] xl:leading-[180%] ">
            A quick look into the Metrics Behind Vaspack Energy Limited' s
            Growth, Innovation, and Contribution to the Oil & Gas Sector.
          </p>
        </div>

        <div className=" hidden sm:block ">
          <Link to="/about">
            <button className="  text-OtherWhite border-[1.5px] border-OtherWhite border-solid rounded-[4px] py-1 lg:py-2 px-4 lg:px-6 font-semibold text-[0.8rem]  xl:text-[0.9rem]">
              About Us
            </button>
          </Link>
        </div>
      </section>

      {/* <section className=" w-full sm:w-[68%] md:w-[65%] xl:w-[67%]">
        <img src={InNumber} className=" w-full rounded-[8px]  " alt="InNumber Image" />
      </section> */}

      <section className=" mt-7 sm:mt-0 flex flex-col sm:flex-row justify-center sm:justify-between text-[0.9rem] ssm:text-[0.9rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] w-full sm:w-[68%] md:w-[65%] xl:w-[67%] border-solid border-[1px] border-OtherWhite ">
        <div className=" flex py-7 w-full sm:w-[33.3%] flex-col gap-5 justify-center items-center">
          <div>
            <img src={experience} className=" w-full" alt="Experience Icon" />
          </div>
          <h3 className="flex text-[1.5rem] ssm:text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium ">
            <span>
              <AnimatedCounter start={0} end={15} duration={2} />
            </span>
            +
          </h3>
          <p className=" font-medium ">Years of Experience</p>
        </div>
        <div className=" flex py-7 w-full sm:w-[33.3%] flex-col gap-5 justify-center items-center border-solid border-y-[1px] sm:border-y-[0]  border-OtherWhite  sm:border-x-[1px]  ">
          <div>
            <img src={truck} className=" w-full" alt="Experience Icon" />
          </div>
          <h3 className=" flex text-[1.5rem] ssm:text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium ">
            <span>
              <AnimatedCounter start={0} end={100} duration={3} />
            </span>
          </h3>
          <div className=" text-center">
            <p className=" leading-[20%] font-medium ">Truck Fleet</p>
            <small className=" text-[0.7rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.7rem] leading-[20%] mt-[0.3rem] font-medium ">
              (Including specialized trucks)
            </small>
          </div>
        </div>
        <div className=" flex py-7 w-full sm:w-[33.3%] flex-col gap-5 justify-center items-center">
          <div>
            <img src={storage} className=" w-full" alt="Experience Icon" />
          </div>
          <h3 className="flex items-end leading-none text-[1.5rem] ssm:text-[1.8rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-medium ">
            <span>
              <AnimatedCounter start={1000} end={3048} duration={3} />
            </span>
            <span>
              km
                <sup className="text-[0.8rem]  ssm:text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem]">
                  3
                </sup>
            </span>
            <sup className=" text-[0.6rem] ">3</sup>
          </h3>
          <p className=" font-medium ">Storage Capacity</p>
        </div>
      </section>

      <section className=" mt-7 flex justify-center">
        <div className=" block sm:hidden ">
          <Link to="/about">
            <button className="  text-OtherWhite border-[1.5px] border-OtherWhite border-solid rounded-[4px] py-1 lg:py-2 px-4 lg:px-6 font-semibold text-[0.9rem]">
              About Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
