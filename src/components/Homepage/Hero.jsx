"use client";

import React, { useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import HeroSwiperNav from "./HeroSwiperNav";

export default function Hero() {
  const HeroMap = [
    {
      key: 1,
      background: "home-hero",
    },
    {
      key: 2,
      background: "home-hero2",
    },
    {
      key: 3,
      background: "home-hero3",
    },
    {
      key: 4,
      background: "home-hero4",
    },
  ];

  const swiper = useSwiper();

  return (
    <div className="relative  mt-12 ssm:mt-16 sm:mt-20 md:mt-24 lg:mt-28 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        {HeroMap.map(({ background }) => (
          <div className="">
            <SwiperSlide>
              <div
                className={`${background} mx-[0%] sm:mx-[5%] text-NormalWhite h-[80vh] sm:h-[60vh] ssm:h-[70vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh] flex items-center sm:items-end pb-[2vh] px-[3%] sm:px-[1.5%] `}
              >
                <section className=" w-full sm:w-[60%] lg:w-[62%] xl:w-[55%]">
                  <h1 className="  text-[1.2rem] ssm:text-[1.4rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] leading-[171%] font-semibold sm:font-bold ">
                    We are an Integrated Energy Company
                  </h1>
                  <p className=" text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.9rem] font-normal sm:font-medium leading-[200%] mt-2 md:mt-4 ">
                    Vaspack Energy Limited is an indigenous downstream company
                    in the Oil & Gas sector with interests in procurement,
                    marketing and distribution of Petroleum Products (Automotive
                    Gas Oil (AGO), Premium Motor Spirit (PMS) and Liquefied
                    Petroleum Gas (LPG); using innovative technology.
                  </p>
                </section>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      {/* navigation bar */}
      <div className="z-[5] absolute text-black bottom-[-0.5%] ssm:bottom-[1.5%] sm:bottom-[0%] xl:bottom-[-1%] left-[5%] sm:left-auto right-auto sm:right-[24%] lg:right-[27%] ">
        <div className="flex gap-2 ssm:gap-3 py-[3vh]  sm:gap-3 ssm:py-[2vh] sm:py-[2.5vh] md:py-[2vh] lg:gap-3 xl:py-[3vh]">
          <div onClick={() => swiper?.slidePrev()} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className=" w-full"
            >
              <circle cx="17" cy="17" r="17" fill="#848584" />
              <path
                d="M12.6 17L18.6 23L20 21.6L15.4 17L20 12.4L18.6 11L12.6 17Z"
                fill="#2D2D2D"
              />
            </svg>
            {/* <BsArrowLeftCircle className="text-[2rem] text-[#DF6751] hover:text-[#FE8B75] ssm:text-[2.5rem] md:text-[1.5rem] lg:text-[2rem]" /> */}
          </div>
          <div className="cursor-pointer" onClick={() => swiper?.slideNext()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className=" w-full"
            >
              <circle cx="17" cy="17" r="17" fill="#0A8E26" />
              <path
                d="M20.4 17L14.4 23L13 21.6L17.6 17L13 12.4L14.4 11L20.4 17Z"
                fill="#2D2D2D"
              />
            </svg>
            {/* <BsFillArrowRightCircleFill className="text-[2rem]  text-[#DF6751] ml-[30%] sm:ml-[0] ssm:text-[2.5rem] md:text-[1.5rem] lg:text-[2rem] hover:text-[#FE8B75]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="home-hero mx-[5%] text-NormalWhite h-[80vh] flex items-end pb-[2vh] px-[1.5%] mt-28 ">
        <section className=" w-[55%]">
          <h1 className=" text-[1.7rem] leading-[178%] font-bold ">
            We are an Integrated Energy Company
          </h1>
          <p className=" text-[0.9rem] leading-[200%] ">
            Vaspack Energy Limited is an indigenous downstream company in the
            Oil & Gas sector with interests in procurement, marketing and
            distribution of Petroleum Products (Automotive Gas Oil (AGO),
            Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using
            innovative technology.
          </p>
        </section>
      </div> */
}
