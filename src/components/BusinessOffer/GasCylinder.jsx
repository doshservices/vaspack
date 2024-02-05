import React from "react";
import TalkToUs from "../Button/TalkToUs";
import { IoLocationSharp } from "react-icons/io5";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

export default function GasCylinder({
  title,
  background,
  link,
  height,
}) {
  return (
    <section
      className={`${background} ${height} mt-5  py-7 sm:py-10 px-[5%] text-center sm:text-left  sm:px-[2%] text-OtherWhite flex items-center sm:items-end gap-7 sm:gap-0 flex-col sm:flex-row justify-center sm:justify-between`}
    >
        
      <div className=" w-full sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[70%] xxl:w-[60%] flex flex-col  justify-end gap-4 sm:gap-4 md:gap-4 lg:gap-5 ">
      <h1 className="font-semibold text-[1.4rem]">{title}</h1>
        <div className="text-[0.8rem] text-center sm:text-justify lg:text-[0.9rem] font-medium">
          <p className=" leading-[170%] ssm:leading-[190%] sm:leading-[214%] ">
          We are just a telephone call away from you. Get instant delivery.
          </p>
          <p className=" leading-[170%] ssm:leading-[190%] sm:leading-[214%] ">
          Vaspack LPG Service is right here for you.
          </p>
          <p className=" leading-[170%] ssm:leading-[190%] sm:leading-[214%] ">
          Call us on: <span className=" font-normal text-[0.9rem] italic ">+234 8074493200</span> or send us a message on WhatsApp.
          </p>
        </div>
        <div className=" flex gap-2 text-[1.1rem] items-center">
            <div>
                <IoLocationSharp />
            </div>
            <p className=" font-bold text-[0.9rem] ">
                34, Agege Motor Road, Moshalashi B/stop, Lagos
            </p>
        </div>
      </div>

      <div className=" flex items-end ">
        <TalkToUs text="Order Now" link={link} />
      </div>
    </section>
  );
}
