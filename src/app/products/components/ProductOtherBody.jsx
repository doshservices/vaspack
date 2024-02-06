import React, { useState } from "react";
import IndustriesCard from "./IndustriesCard";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import AnimatedCounter from "../../../components/AnimatedCounter/AnimatedCounter";
import GreenLine from "../../../components/GreenLine/GreenLine";

export default function ProductsOtherBody({
  firstTitle,
  firstText,
  secondTitle,
  secondTopText,
  downText1,
  downText2,
  downText3,
  downText4,
  downText5,
  downText6,
  downText7,
}) {
  return (
    <div className="my-6 sm:my-7 px-[5%] ">
      <section>
        <section>
          <div className=" ">
            <GreenLine text={firstTitle} />
          </div>
          <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
            {firstText}
          </p>
        </section>
      </section>

      <section className=" mt-6 xl:mt-7">
        <section>
          <div className=" ">
            <GreenLine text={secondTitle} />
          </div>
          <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
            {secondTopText}
          </p>
          <ol className="pl-6 sm:pl-8 text-[0.85rem] sm:text-[0.9rem] flex flex-col gap-2 font-semibold list-inside mt-3">
            <li className="list">{downText1}</li>
            <li className="list">{downText2}</li>
            <li className="list">{downText3}</li>
            <li className="list">{downText4}</li>
            <li className="list">{downText5}</li>
            <li className="list">{downText6}</li>
            {downText7 && <li className="list">{downText7}</li>}
          </ol>
        </section>
      </section>
    </div>
  );
}
