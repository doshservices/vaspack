"use client";

import React, { useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoChevronForward, IoChevronBack } from "react-icons/io5"

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

  const swiperRef = useRef(null);

  const goToPreviousSlide = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

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
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {HeroMap.map(({ background }) => (
          <div className="">
            <SwiperSlide key={background}>
              <div
                className={`${background} mx-[0%] text-center sm:text-left sm:mx-[5%] text-NormalWhite h-[30rem] ssm:h-[34rem] sm:h-[50vh] lg:h-[65vh] xl:h-[80vh] xxl:h-[75vh] flex items-end sm:items-end pb-28 sm:pb-5 px-[3%] sm:px-[1.5%] `}
              >
                <section className=" w-full sm:w-[60%] lg:w-[62%] xl:w-[55%]">
                  <h1 className=" px-[10%] sm:px-0 text-[1.2rem] ssm:text-[1.4rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] leading-[181%] font-semibold sm:font-bold ">
                    We are an Integrated Energy Company
                  </h1>
                  <p className=" px-[3%] sm:px-0 text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.9rem] font-normal sm:font-medium leading-[200%] mt-6 sm:mt-4 ">
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
      <div className="z-[5] ml-[50%] sm:ml-[0%] translate-x-[-50%] sm:translate-x-none absolute text-OtherBlack bottom-[-0.5%] ssm:bottom-[1.5%] sm:bottom-[-1.5%] lg:bottom-0 xl:bottom-[-1%] left-[0%] sm:left-auto right-auto sm:right-[18%] md:right-[20%] lg:right-[24%] ">
        <div className="flex gap-3 py-[3vh]  sm:gap-3 ssm:py-[2vh] sm:py-[2.5vh] md:py-[2vh] lg:gap-3 xl:py-[3vh]">
        <div className="cursor-pointer px-2 py-2 rounded-full bg-[#848584] hover:text-OtherWhite hover:bg-Secondary" onClick={goToPreviousSlide}>
            <IoChevronBack    className=" text-[1.3rem] lg:text-[1.2rem] font-semibold " />
          </div>
          <div className="cursor-pointer px-2 py-2 rounded-full bg-[#8BDA27] hover:text-OtherWhite hover:bg-Secondary" onClick={goToNextSlide}>
            <IoChevronForward   className=" text-[1.3rem] lg:text-[1.2rem] font-semibold " />
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
