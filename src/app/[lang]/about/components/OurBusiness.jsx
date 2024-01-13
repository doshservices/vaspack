import BusinessOffer from "@/components/BusinessOffer/BusinessOffer";
import TalkToUs from "@/components/Button/TalkToUs";
import GreenLine from "@/components/GreenLine/GreenLine";
import React from "react";

export default function OurBusiness() {
  return (
    <div className=" px-[5%] mt-6 xl:mt-7 ">
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
          text="Vaspack Energy strategically addresses industry needs by offering a comprehensive turnkey service in its B2B business model, emphasizing partnership retention and relationship-building within the market/industry. The operational framework encompasses market understanding, defining target audiences, collaborating with experts, articulating key value propositions, integrating cutting-edge technology, prototyping and testing, ensuring regulatory compliance, fostering partnerships, prioritizing scalability and flexibility, implementing a robust marketing strategy, providing customer support and training, and committing to continuous improvement."
          background="our-business"
          ButtonText="Contact Us"
          link="/contact"
          // height="h-[34rem]"
        />
      </div>
    </div>
  );
}
