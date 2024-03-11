import React from "react";
import GreenLine from "../../../components/GreenLine/GreenLine";
import olam from '../assets/olam.png'
import dangote from '../assets/dangote.png'
import bon from '../assets/bon.png'
import uac from '../assets/uac.svg'
import theplace from '../assets/theplace.svg'
import oretol from '../assets/oretol.png'
import crane from '../assets/crane.png'
import hitech from '../assets/hitech.png'
import fmn from '../assets/fmn.png'
import gzi from '../assets/gzi.svg'
import aig from '../assets/aig.svg'


export default function OurClients() {
  return (
    <div className=" px-[5%] my-6 xl:my-7 pb-7 ">
      <section className=" pb-4 border-solid border-b-[1px] ">
        <div className=" ">
          <GreenLine text=" OUR CLIENTS" />
        </div>
        <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
          Yes, We are Trusted by Leading Brands. Here's Some of Our Valued Clients
          </p>
      </section>

      <section className=" flex items-center px-[0] sm:px-[3%] pt-4 gap-y-8 gap-x-[5%] sm:gap-x-[7%]  justify-center flex-wrap">
        <div className=" w-[13%] sm:w-[10%] ">
          <img src={dangote} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[13%] sm:w-[10%] ">
          <img src={olam} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[13%] sm:w-[10%] ">
          <img src={hitech} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[13%] sm:w-[10%] ">
          <img src={bon} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[13%] sm:w-[10%] ">
          <img src={theplace} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[13%] sm:w-[10%] ">
          <img src={oretol} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[8%] sm:w-[7%] ">
          <img src={gzi} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[8%] sm:w-[7%] ">
          <img src={aig} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[8%] sm:w-[7%] ">
          <img src={uac} className=" w-full" alt="Client Logo" />
        </div>
        <div className=" w-[8%] sm:w-[7%] ">
          <img src={crane} className=" w-full" alt="Client Logo" />
        </div>
   
        <div className=" w-[8%] sm:w-[7%] ">
          <img src={fmn} className=" w-full" alt="Client Logo" />
        </div>
        {/* <div className=" w-[10%] ">
          <img src={hitech} className=" w-full" alt="Client Logo" />
        </div> */}
      </section>

    </div>
  );
}
