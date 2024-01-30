import React, { useEffect } from "react";
import logo from "../../assets/Logo/vasplogo1.svg";
import watermark from "./assets/Footerwatermark.svg";
import { FaXTwitter, FaLocationDot  } from "react-icons/fa6";
import { FaYoutube, FaFacebook, FaInstagram  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // window.scrollTo(0, 0)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  }, [])

  return (
    <footer className=" top-border bg-Gray sm:bg-NormalWhite text-FooterBlack mx-[5%] ">
      <section className="relative px-[3%] flex flex-col sm:flex-row justify-between text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.85rem] font-medium py-4 md:py-6 lg:py-8 ">
        <div className=" w-full sm:w-[30%] ">
          <div className=" flex justify-center sm:block">
            <img src={logo} className="w-[45%] xl:w-[40%]" alt="Vaspack Logo" />
          </div>
          <p className=" text-center sm:text-justify pt-4 leading-[214%]">
            Vaspack Energy Limited is an indigenous downstream company in the
            Oil & Gas sector with interests in procurement, marketing and
            distribution of Petroleum Products and more.
          </p>
        </div>

        <div className=" hidden sm:block">
          <h2 className=" text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] font-bold ">Quick Links</h2>
          <ul className=" flex flex-col gap-1 md:gap-2 pt-2 md:pt-4 xl:pt-5 leading-[214%] ">
            <li>
              <Link to="/" className=" hover:text-OtherGreen">Home</Link>
            </li>
            <li>
              <Link to="/about" className=" hover:text-OtherGreen">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className=" hover:text-OtherGreen">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className=" hidden sm:block" >
          <h2 className=" text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] font-bold ">Vaspack</h2>
          <ul className=" flex flex-col gap-1 md:gap-2 pt-2 md:pt-4 xl:pt-5 leading-[214%] ">
            <li>
              <Link to="/" className=" hover:text-OtherGreen">Careers</Link>
            </li>
            <li>
              <Link to="/sustainability" className=" hover:text-OtherGreen">Sustainability</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center mt-4 sm:mt-0 sm:block w-full sm:w-[27%] ">
          <h2 className=" text-base sm:text-[0.8rem] md:text-[0.9rem]  lg:text-[1rem] xl:text-[1.1rem] font-bold ">Our Contacts</h2>
          <div className="flex flex-col gap-1 md:gap-2 pt-2 md:pt-4 xl:pt-5 leading-[214%] ">
            <div className="flex gap-2 ssm:gap-2 justify-center sm:justify-start items-center ">
              <div className=" text-Primary text-[1.1rem] ">
                {/* <img src={call} className=" w-full " /> */}
                <IoCall />
              </div>
              <Link className="hover:text-Primary" to="tel:+2349095750443">+234 909 575 0443</Link>
            </div>
            <div className="flex gap-2 ssm:gap-2 justify-center sm:justify-start items-center ">
              <div className=" text-Primary text-[1.1rem] ">
                {/* <img src={sms} className=" w-full " /> */}
                <MdEmail />
              </div>
              <Link className="hover:text-Primary" to="mailto:sales@vaspackenergy.com">sales@vaspackenergy.com</Link>
            </div>
            <div className="flex gap-2 ssm:gap-2  justify-center sm:justify-start items-start lg:items-center ">
              <div className=" text-Primary text-[1.1rem] pt-1  ">
                {/* <img src={location} className=" w-full " /> */}
                <FaLocationDot />
              </div>
              <p>49 Glover Road, Ikoyi, Lagos, Nigeria.</p>
            </div>
          </div>
        </div>

        {/* position img */}
        <div className=" absolute bottom-0 right-[7%] w-[8%] ">
          <img src={watermark} alt="Watermark Logo" className=" w-full" />
        </div>
      </section>

      <section className="top-border bg-Gray px-[3%] py-2 md:py-4 flex flex-col sm:flex-row items-center justify-between text-[0.7rem] sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] font-medium leading-[112%]  ">
        <Link to="/"  className="hover:text-OtherGreen">Terms and Conditions</Link>

        {/* desktop */}
        <p className=" hidden sm:block">© Copyright {currentYear} Vaspack Energy Limited. All rights reserved.</p>

        <div className=" w-[50%] text-[1.15rem] ssm:w-[50%] sm:w-[15%] py-4 sm:py-0 flex justify-center sm:justify-end gap-4 sm:gap-4 ">
          <div >
            <Link to="" className=" hover:text-[#0866FF]  ">
              {/* <img src={facebook} alt="facebook logo" className=" w-full " /> */}
              
              <FaFacebook />
            </Link>
          </div>
          <div className="  ">
          <Link to="" className=" hover:text-black ">
              {/* <img src={twitter} alt="facebook logo" className=" w-full " /> */}
              <FaXTwitter />
            </Link>
          </div>
          <div className=" ">
          <Link to="" className=" instagram">
              {/* <Image src={instagram} alt="facebook logo" className=" w-full " /> */}
              <FaInstagram />
            </Link>
          </div>
          <div className="  ">
          <Link to="" className="hover:text-[#FF0302] ">
              {/* <Image src={youtube} alt="facebook logo" className=" w-full " /> */}
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* mobile */}
        <p className=" text-center  block sm:hidden">© Copyright {currentYear} Vaspack Energy Limited. All rights reserved.</p>

      </section>
    </footer>
  );
}
