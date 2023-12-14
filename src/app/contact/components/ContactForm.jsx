import React from "react";
import map from "../assets/map.png";
import Image from "next/image";
import Button from "@/components/Button/Button";
import DropdownOther from "@/components/Dropdown/DropdownOther";

export default function ContactForm() {
  return (
    <div className=" px-[5%] lg:px-[7%] mt-6 sm:mt-10 lg:mt-14 xl:mt-16 mb-8 sm:mb-12 lg:mb-16 xl:mb-20 ">
      <section>
        <Image src={map} alt="A map" className=" w-full" />
      </section>

      <form action="" className=" mt-7 ">
        <div className="gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
          <input type="text" className="w-[100%] sm:w-[48%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack " placeholder="Full Name" />
          <input type="email" className="w-[100%] sm:w-[48%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack " placeholder="Full Name" />
        </div>

        <div className=" mt-5 gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
          <DropdownOther />
          <DropdownOther />
        </div>

        <textarea
          name=""
          id=""
          className="w-full resize-none mt-5 py-2 px-[1.5%] text-[0.9rem] sm:text-base leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
          cols=""
          rows="3"
          placeholder="Message"
        ></textarea>

        <div className=" mt-7 font-medium text-[0.9rem] leading-[140%] tracking-[0.199px]">
          <h3 className=" font-bold">Privacy Statement</h3>
          <p className="leading-[140%] mt-1 sm:mt-1 ">
            Vaspack Energy is committed to protecting and respecting your
            privacy. The Privacy Policy (together with our Terms of Use and any
            other documents referred to in it) sets out the basis on which any
            personal data which Vaspack Energy collects from you, or that you
            provide to Vaspack Energy, will be processed by us.
          </p>
        </div>

        <div className="mt-2 flex items-center gap-3 font-medium text-[0.8rem] tracking-[0.199px] ">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className=" cursor-pointer">I understand and agree</label>
        </div>

        <div className=" text-center mt-12">
          <Button text="Send Message" />
        </div>
      </form>
    </div>
  );
}
