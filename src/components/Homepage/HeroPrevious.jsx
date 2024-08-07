import { useRef } from "react";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { useSwiper } from "swiper/react";
// import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import MobileHero from "./assets/MobileHero.jpg";
import DesktopHero from "./assets/DesktopHero.jpg";
import MobileHero2 from "./assets/MobileHero2.jpg";
import DesktopHero2 from "./assets/DesktopHero2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// import HeroSwiperNav from "./HeroSwiperNav";
// import { useTranslation } from "react-i18next";
// import { useTranslation } from "next-translate";

export default function HeroPrevious() {
  // const { t } = useTranslation();

  const HeroMap = [
    {
      key: 1,
      background: DesktopHero,
    },
    {
      key: 2,
      background: DesktopHero2,
    },
  ];
  const HeroMapMobile = [
    {
      key: 1,
      background: MobileHero,
    },
    {
      key: 2,
      background: MobileHero2,
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
    <div className="relative  mt-20 ssm:mt-20 sm:mt-20 md:mt-24 lg:mt-28 ">
      {/* desktop section */}
      <section className=" hidden sm:block ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {HeroMap.map(({ background, key }) => (
            <div className="" key={key}>
              <SwiperSlide>
                <div
                  className={` text-center sm:text-left  text-NormalWhite  flex items-end sm:items-end  px-[5%]  `}
                >
                  {/* <section className=" w-full sm:w-[60%] lg:w-[62%] xl:w-[55%]">
                  <h1 className=" px-[10%] sm:px-0 text-[1.2rem] ssm:text-[1.4rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] leading-[181%] font-semibold sm:font-bold ">
                    We are an Integrated Energy Company
                  </h1>
                  <p className=" px-[3%] text-justify sm:px-0 text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.9rem] font-normal sm:font-medium leading-[200%] mt-6 sm:mt-4 ">
                    Vaspack Energy Limited is an indigenous downstream company in the Oil & Gas sector with interests in procurement, marketing and distribution of Petroleum Products (Automotive Gas Oil (AGO), Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using innovative technology
                  </p>
                </section> */}
                  <section>
                    <img src={background} className=" w-full" alt="" />
                  </section>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </section>

      {/* mobile section */}
      <section className=" block sm:hidden ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {HeroMapMobile.map(({ background, key }) => (
            <div className="" key={key}>
              <SwiperSlide>
                <div
                  className={` mx-[0%]  text-center sm:text-left text-NormalWhite  flex items-end   px-[5%] `}
                >
                  <section>
                    <img src={background} className=" w-full" alt="" />
                  </section>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </section>

      {/* navigation bar */}
      <div className="z-[5] ml-[50%] sm:ml-[0%] hidden  translate-x-[-50%] sm:translate-x-none absolute text-OtherBlack bottom-[0%] ssm:bottom-[8%] sm:bottom-[10%] lg:bottom-[10%] xl:bottom-[8%] left-[0%] sm:left-auto right-auto sm:right-[18%] md:right-[20%] lg:right-[22%] xl:right-[24%] ">
        <div className="flex gap-3 py-[3vh]  sm:gap-3 ssm:py-[2vh] sm:py-[2.5vh] md:py-[2vh] lg:gap-3 xl:py-[3vh]">
          <div
            className="cursor-pointer px-2 py-2 rounded-full bg-[#8BDA27] hover:text-OtherWhite hover:bg-Secondary"
            onClick={goToPreviousSlide}
          >
            <IoChevronBack className=" text-[1.3rem] lg:text-[1.2rem] font-semibold " />
          </div>
          <div
            className="cursor-pointer px-2 py-2 rounded-full bg-[#8BDA27] hover:text-OtherWhite hover:bg-Secondary"
            onClick={goToNextSlide}
          >
            <IoChevronForward className=" text-[1.3rem] lg:text-[1.2rem] font-semibold " />
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
