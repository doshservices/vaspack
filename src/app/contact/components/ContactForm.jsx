import React from "react";
import map from "../assets/map.png";
import Image from "next/image";
import Button from "@/components/Button/Button";
import DropdownOther from "@/components/Dropdown/DropdownOther";
import DropdownOther2 from "@/components/Dropdown/DropdownOther2";

export default function ContactForm() {
  return (
    <div className=" px-[5%] lg:px-[5%] my-6 xl:my-7 ">
      <section className=" h-[240px] sm:h-[450px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.55082311516!2d3.4376762735036945!3d6.451662623997082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4e82fbe9423%3A0xa9c16549d43d88ca!2s49%20Glover%20Rd%2C%20Ikoyi%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1704725613214!5m2!1sen!2sng" width="100%" height="100%"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <form action="" className=" mt-7 ">
        <div className="gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
          <input type="text" className="w-[100%] sm:w-[48%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack " placeholder="Full Name" />
          <input type="email" className="w-[100%] sm:w-[48%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack " placeholder="Email" />
        </div>

        <div className=" mt-5 gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
          <DropdownOther />
          <DropdownOther2 />
        </div>

        <textarea
          name=""
          id=""
          className="w-full resize-none mt-5 py-2 px-[1.5%] text-[0.9rem] sm:text-base leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
          cols=""
          rows="4"
          placeholder="Message"
        ></textarea>

        <div className=" mt-7 px-[2%] font-medium text-[0.9rem] leading-[140%] tracking-[0.199px]">
          <h3 className=" font-bold">Privacy Statement</h3>
          <p className="leading-[140%] mt-1 sm:mt-1 ">
            Vaspack Energy is committed to protecting and respecting your
            privacy. The Privacy Policy (together with our Terms of Use and any
            other documents referred to in it) sets out the basis on which any
            personal data which Vaspack Energy collects from you, or that you
            provide to Vaspack Energy, will be processed by us.
          </p>
        </div>

        <div className="mt-2 px-[2%] flex items-center gap-3 font-medium text-[0.8rem] tracking-[0.199px] ">
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
