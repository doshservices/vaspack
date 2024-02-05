import React, { useState } from "react";
import IndustriesCard from "./IndustriesCard";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import AnimatedCounter from "../../../components/AnimatedCounter/AnimatedCounter";
import GreenLine from "../../../components/GreenLine/GreenLine";

export default function ProductsOtherBody({ firstText }) {
  const [activeTab, setActiveTab] = useState("Agriculture"); // Set the default active tab
  const handleTabDesktopClick = (tab) => {
    setActiveTab(tab);
  };
  const handleTabClick = (tabName) => {
    // Fix: Use conditional check to avoid infinite loop
    if (activeTab === tabName) {
      setActiveTab("");
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <div className="my-6 sm:my-7 px-[5%] ">
      <section>
        <section>
          <div className=" ">
            <GreenLine text="Liquefied Petroleum Gas" />
          </div>
          <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
            {firstText}
          </p>
        </section>
      </section>

      <section className=" mt-6 xl:mt-7">
        <section>
          <div className=" ">
            <GreenLine text="Our LPG Services" />
          </div>
          <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
            We provide the following types of services to cater for your LPG
            needs for domestic and industrial purposes:
          </p>
          <ol className="pl-2 text-[0.9rem] font-semibold list-inside list-disc flex gap-2 flex-col mt-2 ">
            <li>Sales and Service of assorted cylinders & Accessories.</li>
            <li>Cylinder Installation.</li>
            <li>Retail of Domestic & Bulk Cooking Gas.</li>
            <li>General LPG Solutions.</li>
            <li>Specialized Solutions.</li>
            <li>LPG Consultancy Services.</li>
          </ol>
        </section>
      </section>

    </div>
  );
}
