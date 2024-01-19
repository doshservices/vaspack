"use client";
// components/HeaderMobile.js

// components/HeaderMobile.js

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import sms from "../../assets/Icons/sms.png";
import careers from "../../assets/Icons/careers.png";
import call from "../../assets/Icons/call.png";
import language from "../../assets/Icons/language.png";
import logo from "../../assets/Logo/vasplogo1.svg";
import Dropdown from "../Dropdown/DropDown";
import DropdownOther from "../Dropdown/DropDown";
import TextTransition, { presets } from "react-text-transition";

const HeaderMobile = ({ options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value, link) => {
    onSelect(value);
    setIsOpen(false);
    router.push(link);
  };

  const TEXTS = ['AGO $4.56/Gal ', 'PMS-$2.86/Gal', 'JET-$83.7/BBL'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000, // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative md:hidden">
      {/* Mobile Header */}
      <header className="fixed z-10 w-full top-0 bg-Gray text-OtherBlack  text-[0.75rem] font-semibold h-[10vh] px-[5%] flex justify-between items-center">
        <div className="flex w-full justify-between items-center">
          <Link href="/" className=" w-[30%]">
            <Image src={logo} alt="Vaspack Logo" className="w-full" />
          </Link>
          <section className=" flex items-center gap-2">
            <div className=" text-[0.8rem] flex items-center ">
            <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </div>
            <button onClick={toggleMenu} className="">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M7.46683 22.1666L5.8335 20.5333L12.3668 13.9999L5.8335 7.46659L7.46683 5.83325L14.0002 12.3666L20.5335 5.83325L22.1668 7.46659L15.6335 13.9999L22.1668 20.5333L20.5335 22.1666L14.0002 15.6333L7.46683 22.1666Z"
                    fill="#2D2D2D"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M3.5 21V18.6667H24.5V21H3.5ZM3.5 15.1667V12.8333H24.5V15.1667H3.5ZM3.5 9.33333V7H24.5V9.33333H3.5Z"
                    fill="#2D2D2D"
                  />
                </svg>
              )}
            </button>
          </section>
        </div>
        <div></div>
        <div>{/* Additional Mobile Header Items */}</div>
      </header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 pt-4 px-[5%] w-full top-[10vh] bg-NormalWhite text-OtherBlack h-[100vh]  z-50">
          <section className=" flex flex-col justify-between">
            <section>
              <section className=" flex  px-[5%] justify-between text-[0.85rem] ssm:text-[0.9rem] border-solid border-[2px] border-Primary  items-center">
                <div className="flex justify-center text-center gap-1 items-center   ">
                  <p>Career</p>
                  <div className="w-[25%] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className=" w-full"
                    >
                      <path
                        d="M14.1429 11.5714L12.3107 11.5392L12.3107 6.97493L4.5 14.7856L3.21429 13.4999L11.025 5.68922L6.46071 5.68922L6.42857 3.85707L14.1429 3.85707L14.1429 11.5714Z"
                        fill="#2D2D2D"
                      />
                    </svg>
                  </div>
                </div>
                {/* <div className=" border-OtherBlack border-r-[3px] border-solid " /> */}
                <Link
                  href="/contact"
                  className="block hover:text-OtherGreen border-solid text-center py-2 w-[33%] border-x-[2px] border-Primary "
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
                <div className="flex justify-center flex-row-reverse gap-1 items-center   ">
                  <p>English</p>
                  <div className="w-[25%] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      className="w-full"
                    >
                      <path
                        d="M11.0002 20.1666C9.74739 20.1666 8.56336 19.926 7.44808 19.4447C6.3328 18.9635 5.35884 18.3065 4.5262 17.4739C3.69357 16.6412 3.03662 15.6673 2.55537 14.552C2.07412 13.4367 1.8335 12.2527 1.8335 10.9999C1.8335 9.73186 2.07412 8.54402 2.55537 7.43638C3.03662 6.32874 3.69357 5.3586 4.5262 4.52596C5.35884 3.69332 6.3328 3.03638 7.44808 2.55513C8.56336 2.07388 9.74739 1.83325 11.0002 1.83325C12.2682 1.83325 13.4561 2.07388 14.5637 2.55513C15.6713 3.03638 16.6415 3.69332 17.4741 4.52596C18.3068 5.3586 18.9637 6.32874 19.445 7.43638C19.9262 8.54402 20.1668 9.73186 20.1668 10.9999C20.1668 12.2527 19.9262 13.4367 19.445 14.552C18.9637 15.6673 18.3068 16.6412 17.4741 17.4739C16.6415 18.3065 15.6713 18.9635 14.5637 19.4447C13.4561 19.926 12.2682 20.1666 11.0002 20.1666ZM11.0002 18.2874C11.3974 17.7374 11.7411 17.1645 12.0314 16.5687C12.3217 15.9728 12.5585 15.3388 12.7418 14.6666H9.2585C9.44183 15.3388 9.67864 15.9728 9.96891 16.5687C10.2592 17.1645 10.6029 17.7374 11.0002 18.2874ZM8.61683 17.9208C8.34183 17.4166 8.1012 16.8933 7.89495 16.351C7.6887 15.8086 7.51683 15.2471 7.37933 14.6666H4.67516C5.11822 15.4305 5.67204 16.0951 6.33662 16.6603C7.0012 17.2256 7.76127 17.6458 8.61683 17.9208ZM13.3835 17.9208C14.2391 17.6458 14.9991 17.2256 15.6637 16.6603C16.3283 16.0951 16.8821 15.4305 17.3252 14.6666H14.621C14.4835 15.2471 14.3116 15.8086 14.1054 16.351C13.8991 16.8933 13.6585 17.4166 13.3835 17.9208ZM3.896 12.8333H7.01266C6.96683 12.5277 6.93245 12.226 6.90954 11.928C6.88662 11.6301 6.87516 11.3208 6.87516 10.9999C6.87516 10.6791 6.88662 10.3697 6.90954 10.0718C6.93245 9.77388 6.96683 9.47214 7.01266 9.16659H3.896C3.81961 9.47214 3.76232 9.77388 3.72412 10.0718C3.68593 10.3697 3.66683 10.6791 3.66683 10.9999C3.66683 11.3208 3.68593 11.6301 3.72412 11.928C3.76232 12.226 3.81961 12.5277 3.896 12.8333ZM8.846 12.8333H13.1543C13.2002 12.5277 13.2345 12.226 13.2575 11.928C13.2804 11.6301 13.2918 11.3208 13.2918 10.9999C13.2918 10.6791 13.2804 10.3697 13.2575 10.0718C13.2345 9.77388 13.2002 9.47214 13.1543 9.16659H8.846C8.80016 9.47214 8.76579 9.77388 8.74287 10.0718C8.71995 10.3697 8.7085 10.6791 8.7085 10.9999C8.7085 11.3208 8.71995 11.6301 8.74287 11.928C8.76579 12.226 8.80016 12.5277 8.846 12.8333ZM14.9877 12.8333H18.1043C18.1807 12.5277 18.238 12.226 18.2762 11.928C18.3144 11.6301 18.3335 11.3208 18.3335 10.9999C18.3335 10.6791 18.3144 10.3697 18.2762 10.0718C18.238 9.77388 18.1807 9.47214 18.1043 9.16659H14.9877C15.0335 9.47214 15.0679 9.77388 15.0908 10.0718C15.1137 10.3697 15.1252 10.6791 15.1252 10.9999C15.1252 11.3208 15.1137 11.6301 15.0908 11.928C15.0679 12.226 15.0335 12.5277 14.9877 12.8333ZM14.621 7.33325H17.3252C16.8821 6.56936 16.3283 5.90478 15.6637 5.3395C14.9991 4.77422 14.2391 4.35409 13.3835 4.07909C13.6585 4.58325 13.8991 5.10652 14.1054 5.64888C14.3116 6.19124 14.4835 6.7527 14.621 7.33325ZM9.2585 7.33325H12.7418C12.5585 6.66103 12.3217 6.027 12.0314 5.43117C11.7411 4.83534 11.3974 4.26242 11.0002 3.71242C10.6029 4.26242 10.2592 4.83534 9.96891 5.43117C9.67864 6.027 9.44183 6.66103 9.2585 7.33325ZM4.67516 7.33325H7.37933C7.51683 6.7527 7.6887 6.19124 7.89495 5.64888C8.1012 5.10652 8.34183 4.58325 8.61683 4.07909C7.76127 4.35409 7.0012 4.77422 6.33662 5.3395C5.67204 5.90478 5.11822 6.56936 4.67516 7.33325Z"
                        fill="#2D2D2D"
                      />
                    </svg>
                  </div>
                </div>
              </section>
              <section className="">
                <div className="mt-4  text-base font-medium">
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col ">
                    <Link
                      href="/"
                      className="block hover:text-OtherGreen border-solid border-[#2d2d2d33] border-b-[1px] py-6"
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="block hover:text-OtherGreen border-solid border-[#2d2d2d33] border-b-[1px] py-6"
                      onClick={toggleMenu}
                    >
                      About Us
                    </Link>
                    <Dropdown
                      options={options}
                      onSelect={(value) =>
                        handleOptionClick(
                          value,
                          options.find((o) => o.value === value)?.link
                        )
                      }
                      selectedValue={selectedValue}
                    />
                    <Link
                      href="/news"
                      className="block hover:text-OtherGreen border-solid border-[#2d2d2d33] border-b-[1px] py-6"
                      onClick={toggleMenu}
                    >
                      News and Insights
                    </Link>
                    <Link
                      href="/sustainability"
                      className="block hover:text-OtherGreen border-solid border-[#2d2d2d33] border-b-[1px] py-6"
                      onClick={toggleMenu}
                    >
                      Sustainability
                    </Link>
                  </div>
                </div>
              </section>
            </section>

            <section className=" text-OtherBlack absolute bottom-[13%] translate-x-[-50%] left-[50%] w-[full] flex justify-center flex-col items-center text-[0.9rem] font-medium ">
              <div className=" flex gap-2 justify-center items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    className=" w-full"
                  >
                    <path
                      d="M8.7875 11.2125L7.4 12.6C7.1075 12.8925 6.6425 12.8925 6.3425 12.6075C6.26 12.525 6.1775 12.45 6.095 12.3675C5.3225 11.5875 4.625 10.77 4.0025 9.915C3.3875 9.06 2.8925 8.205 2.5325 7.3575C2.18 6.5025 2 5.685 2 4.905C2 4.395 2.09 3.9075 2.27 3.4575C2.45 3 2.735 2.58 3.1325 2.205C3.6125 1.7325 4.1375 1.5 4.6925 1.5C4.9025 1.5 5.1125 1.545 5.3 1.635C5.495 1.725 5.6675 1.86 5.8025 2.055L7.5425 4.5075C7.6775 4.695 7.775 4.8675 7.8425 5.0325C7.91 5.19 7.9475 5.3475 7.9475 5.49C7.9475 5.67 7.895 5.85 7.79 6.0225C7.6925 6.195 7.55 6.375 7.37 6.555L6.8 7.1475C6.7175 7.23 6.68 7.3275 6.68 7.4475C6.68 7.5075 6.6875 7.56 6.7025 7.62C6.725 7.68 6.7475 7.725 6.7625 7.77C6.8975 8.0175 7.13 8.34 7.46 8.73C7.7975 9.12 8.1575 9.5175 8.5475 9.915C8.6225 9.99 8.705 10.065 8.78 10.14C9.08 10.4325 9.0875 10.9125 8.7875 11.2125Z"
                      fill="#2D2D2D"
                    />
                    <path
                      d="M16.9777 13.7473C16.9777 13.9573 16.9402 14.1748 16.8652 14.3848C16.8427 14.4448 16.8202 14.5048 16.7902 14.5648C16.6627 14.8348 16.4977 15.0898 16.2802 15.3298C15.9127 15.7348 15.5077 16.0273 15.0502 16.2148C15.0427 16.2148 15.0352 16.2223 15.0277 16.2223C14.5852 16.4023 14.1052 16.4998 13.5877 16.4998C12.8227 16.4998 12.0052 16.3198 11.1427 15.9523C10.2802 15.5848 9.4177 15.0898 8.5627 14.4673C8.2702 14.2498 7.9777 14.0323 7.7002 13.7998L10.1527 11.3473C10.3627 11.5048 10.5502 11.6248 10.7077 11.7073C10.7452 11.7223 10.7902 11.7448 10.8427 11.7673C10.9027 11.7898 10.9627 11.7973 11.0302 11.7973C11.1577 11.7973 11.2552 11.7523 11.3377 11.6698L11.9077 11.1073C12.0952 10.9198 12.2752 10.7773 12.4477 10.6873C12.6202 10.5823 12.7927 10.5298 12.9802 10.5298C13.1227 10.5298 13.2727 10.5598 13.4377 10.6273C13.6027 10.6948 13.7752 10.7923 13.9627 10.9198L16.4452 12.6823C16.6402 12.8173 16.7752 12.9748 16.8577 13.1623C16.9327 13.3498 16.9777 13.5373 16.9777 13.7473Z"
                      fill="#2D2D2D"
                    />
                  </svg>
                </div>
                <p>+234 909 575 0443</p>
              </div>

              <div className=" flex gap-2 justify-center items-center">
                <div className=" ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className=" w-full"
                  >
                    <path
                      d="M12.75 2.625H5.25C3 2.625 1.5 3.75 1.5 6.375V11.625C1.5 14.25 3 15.375 5.25 15.375H12.75C15 15.375 16.5 14.25 16.5 11.625V6.375C16.5 3.75 15 2.625 12.75 2.625ZM13.1025 7.1925L10.755 9.0675C10.26 9.465 9.63 9.66 9 9.66C8.37 9.66 7.7325 9.465 7.245 9.0675L4.8975 7.1925C4.6575 6.9975 4.62 6.6375 4.8075 6.3975C5.0025 6.1575 5.355 6.1125 5.595 6.3075L7.9425 8.1825C8.5125 8.64 9.48 8.64 10.05 8.1825L12.3975 6.3075C12.6375 6.1125 12.9975 6.15 13.185 6.3975C13.38 6.6375 13.3425 6.9975 13.1025 7.1925Z"
                      fill="#2D2D2D"
                    />
                  </svg>
                </div>
                <p>sales@vaspackenergy.com</p>
              </div>
            </section>
          </section>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
