"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { FaBeer } from 'react-icons/fa';
import sms from "../../assets/Icons/sms.png";
import careers from "../../assets/Icons/careers.png";
import call from "../../assets/Icons/call.png";
import language from "../../assets/Icons/language.png";
import logo from "../../assets/Logo/vasplogo1.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Dropdown from "../Dropdown/DropDown";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import TextTransition, { presets } from "react-text-transition";
// import { useTranslation } from "next-i18next";/
// import { useRouter } from "next/router";

export default function HeaderDesktop({ href }) {
  const options = [
    {
      label: "Products and Services",
      value: "Products and Services",
      link: "/products",
    },
    { label: "liquefied", value: "Liquefied", link: "/products/liquefied" },
    { label: "petrol", value: "Petrol", link: "/products/petrol" },
    { label: "kerosene", value: "Kerosene", link: "/products/kerosene" },
    { label: "lubricants", value: "Lubricants", link: "/products/lubricants" },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  {
    /* Get the current route */
  }
  const currentRoute = usePathname();
  const isProductsRoute = currentRoute === "/products" || currentRoute === "/products/liquefied" || currentRoute === "/products/petrol" || currentRoute === "/products/kerosene" || currentRoute === "/products/lubricants";

  // const { t } = useTranslation();

  // const oilPrice = "VSP $33.79"

  const TEXTS = ['AGO $33.79/Gal ', 'PMS $2.86/Gal', 'JET $83.7/BBL'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000, // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <header className=" fixed z-10 w-full top-0">
      <section className=" bg-Primary text-OtherWhite leading-[0%] text-[0.65rem] lg:text-[0.75rem] xl:text-[0.8rem] font-semibold flex items-center justify-between px-[5%] py-[0.5rem] ">
        <div className=" flex items-center gap-4  ">
          <div className="flex gap-2 items-center w-full  ">
            <div className=" text-[1.1rem] ">
              <IoCall />
            </div>
            <p>+234 909 575 0443</p>
          </div>
          <div className="flex gap-2 items-center w-full  ">
            <div className="text-[1.1rem] ">
              <MdEmail />
            </div>
            <p>sales@vaspackenergy.com</p>
          </div>
        </div>

        <div className=" flex w-[43%] md:w-[38%] lg:w-[32%] xl:w-[30%] items-center justify-end gap-2  ">
          <div className="flex gap-1 items-center w-full  ">
            <p>Careers</p>
            <div className="w-[20%] ">
              <Image alt="icon" className="w-full " src={careers} />
            </div>
          </div>
          <div className="w-full ">
            {/* <p>VSP $33.79</p> */}
            <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
           
          </div>
          <div className="flex gap-1 items-center w-full  ">
            <p>English</p>
            <div className="w-[20%] ">
              <Image alt="icon" className="w-full " src={language} />
            </div>
          </div>
        </div>
      </section>

      <section className="header-bottom flex items-center justify-between text-[0.6rem] md:text-[0.65rem]  lg:text-[0.85rem] xl:text-[0.9rem] font-medium capitalize  bg-Gray px-[5%] lg:px-[7%] py-[0.25rem] text-OtherBlack">
        <div className=" flex justify-between items-center gap-4 md:gap-6 lg:gap-10 ">
          <Link
            href="/"
            className={
              currentRoute === "/"
                ? "border-b-[3px] border-Secondary border-solid pb-1 hover:text-OtherGreen"
                : " border-none hover:text-OtherGreen pb-1"
            }
          >
            Home
            {/* {t('app_title')} */}
          </Link>
          <Link
            href="/about"
            className={
              currentRoute === "/about"
                ? "border-b-[3px] border-Secondary border-solid pb-1 hover:text-OtherGreen"
                : " border-none hover:text-OtherGreen pb-1"
            }
          >
            About us
          </Link>

          <div
            className={
              isProductsRoute
                ? "border-b-[3px] border-Secondary border-solid pb-1 hover:text-OtherGreen"
                : " border-none hover:text-OtherGreen pb-1"
            }
          >
            <Dropdown
              options={options}
              onSelect={(value) => setSelectedValue(value)}
              selectedValue={selectedValue}
            />
          </div>
        </div>

        
          <div className="  w-[15%] md:w-[12%] ">
          <Link href="/">
            <Image src={logo} alt="Vaspack Logo" className=" w-full" />
            </Link>
          </div>
        

        <div className=" flex justify-between items-center gap-4 md:gap-6 lg:gap-10 ">
          <Link
            href="/news"
            className={
              currentRoute === "/news"
                ? "border-b-[3px] border-Secondary border-solid pb-1 hover:text-OtherGreen"
                : " border-none hover:text-OtherGreen pb-1"
            }
          >
            News and Insights
          </Link>
          <Link
            href="/sustainability"
            className={
              currentRoute === "/sustainability"
                ? "border-b-[3px] border-Secondary border-solid pb-1 hover:text-OtherGreen"
                : " border-none hover:text-OtherGreen pb-1"
            }
          >
            {/* {currentRoute} */}
            Sustainability
          </Link>
          <Link
            href="/contact"
            className={
              currentRoute === "/contact"
                ? "border-b-[3px] border-Secondary border-solid pb-1 hover:text-OtherGreen"
                : " border-none hover:text-OtherGreen pb-1"
            }
          >
            Contact Us
          </Link>
        </div>
      </section>
    </header>
  );
}
