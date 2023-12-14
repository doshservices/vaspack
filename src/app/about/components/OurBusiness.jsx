import BusinessOffer from "@/components/BusinessOffer/BusinessOffer";
import TalkToUs from "@/components/Button/TalkToUs";
import GreenLine from "@/components/GreenLine/GreenLine";
import React from "react";

export default function OurBusiness() {
  return (
    <div className=" px-[7%] mt-12 lg:mt-16 xl:mt-20 ">
      <section>
        <div className=" ">
          <GreenLine text=" OUR BUSINESS" />
        </div>
        <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
          Vaspack Energy Limited is an indigenous downstream company in the Oil
          & Gas sector with interests in procurement, marketing and distribution
          of Petroleum Products (Automotive Gas Oil (AGO), Premium Motor Spirit
          (PMS) and Liquefied Petroleum Gas (LPG); using innovative technology.
        </p>
      </section>

      <div>
        <BusinessOffer
          title="How We Create Value"
          text="Automotive Gas oil, also known as diesel, is generated from crude
        distillation process and is predominantly used to efficiently
        power internal combustion diesel engines and power generation. Our
        diesel conforms to the specifications from the Department of
        Petroleum Resources (DPR)."
          background="our-business"
          ButtonText="Talk To Us"
        />
      </div>
    </div>
  );
}
