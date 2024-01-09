"use client";

import React, { useRef, useState } from "react";
import BusinessOffer from "../BusinessOffer/BusinessOffer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import GreenLine from "../GreenLine/GreenLine";

export default function WhatWeOffer() {
  const [activeTab, setActiveTab] = useState("Automotive"); // Set the default active tab
  const handleTabDesktopClick = (tab) => {
    setActiveTab(tab);
  };

  const OfferMap = [
    {
      key: 1,
      background: "what-we-offer",
      title: "Automotive Gas Oil - Diesel",
      cardTitle: "Automotive Gas Oil - Diesel ",
      link: "products",
      cardText: "Automotive Gas oil, also known as diesel, is generated from crude distillation process and is predominantly used to efficiently power internal combustion diesel engines and power generation. Our diesel conforms to the specifications from the Department of Petroleum Resources (DPR). "
    },
    {
      key: 2,
      background: "petrol",
      title: "Premium Motor Spirits - Petrol",
      cardTitle: "Premium Motor Spirits - Petrol ",
      link: "products/petrol",
      cardText: "Popularly known as Gasoline or Petrol, is primarily used as fuel in internal combustion engines. Vaspack Energy partners with retail outlets spread across Nigeria. "
    },
    {
      key: 3,
      background: "kerosene",
      title: "Kerosene",
      cardTitle: "Kerosene ",
      link: "products/kerosene",
      cardText: "Kerosene, also known as paraffin, lamp oil, and coal oil (an obsolete term), is a combustible hydrocarbon liquid which is derived from petroleum. It is widely used as a fuel in households. "
    },
    {
      key: 4,
      background: "liquefied",
      title: "Liquefied Petroleum Gas",
      cardTitle: "Liquefied Petroleum Gas ",
      link: "products/liquefied",
      cardText: "Liquefied petroleum gas (LPG or LP gas), is a flammable mixture of hydrocarbon gases used as fuel in heating appliances, cooking equipment, and vehicles. We supply to your doorstep at your convenience and to all businesses that require our service "
    },
    {
      key: 5,
      background: "lubricants",
      title: "Lubricant",
      cardTitle: "Lubricant ",
      link: "products/lubricants",
      cardText: "Our premium lubricants, meticulously crafted through advanced refining processes, are tailored to meet rigorous industry standards and guarantee optimal protection for your machinery. Trust in our quality assurance, as our products comply with the highest specifications. "
    },
  ];
  return (
    <div className="mb-4 ssm:mb-7 sm:mb-12 md:mb-6 xl:mb-7 px-[5%] ">
      <section className=" text-center sm:text-left">
        <GreenLine text="WHAT WE OFFER" />
      </section>

      {/* desktop */}
      <section className=" hidden sm:block relative ">
        <div className="border-t-[1.5px] w-[100%] border-solid bg-OtherWhite mt-[1px] z-[-2] absolute top-0  "></div>
        <div className=" flex justify-between text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] font-medium mt-6 lg:mt-8 ">
          <h3
            onClick={() => handleTabDesktopClick("Automotive")}
            className={`border-t-[4px] border-solid  cursor-pointer pt-4 ${
              activeTab === "Automotive"
                ? "border-OtherGreen"
                : "border-transparent"
            } `}
          >
            Automotive Gas Oil - Diesel
          </h3>
          <h3
            onClick={() => handleTabDesktopClick("Petrol")}
            className={`border-t-[4px] border-solid  cursor-pointer pt-4 ${
              activeTab === "Petrol"
                ? "border-OtherGreen"
                : "border-transparent"
            } `}
          >
            Premium Motor Spirits - Petrol
          </h3>
          <h3
            onClick={() => handleTabDesktopClick("Kerosene")}
            className={`border-t-[4px] border-solid  cursor-pointer pt-4 ${
              activeTab === "Kerosene"
                ? "border-OtherGreen"
                : "border-transparent"
            } `}
          >
            Kerosene
          </h3>
          <h3
            onClick={() => handleTabDesktopClick("Liquefied")}
            className={`border-t-[4px] border-solid  cursor-pointer pt-4 ${
              activeTab === "Liquefied"
                ? "border-OtherGreen"
                : "border-transparent"
            } `}
          >
            Liquefied Petroleum Gas
          </h3>
          <h3
            onClick={() => handleTabDesktopClick("Lubricant")}
            className={`border-t-[4px] border-solid  cursor-pointer pt-4 ${
              activeTab === "Lubricant"
                ? "border-OtherGreen"
                : "border-transparent"
            } `}
          >
            Lubricant
          </h3>
        </div>

        <div>
          {activeTab === "Automotive" && (
            <BusinessOffer
              title="Automotive Gas Oil - Diesel"
              text="Automotive Gas oil, also known as diesel, is generated from crude distillation 
              process and is predominantly used to efficiently power internal combustion diesel engines 
              and power generation. Our diesel conforms to the specifications from the Department of 
              Petroleum Resources (DPR)."
              background="what-we-offer"
              ButtonText="Explore More"
              link="/products"
            />
          )}
          {activeTab === "Petrol" && (
            <BusinessOffer
              title="Premium Motor Spirits - Petrol"
              text="Popularly known as Gasoline or Petrol, is primarily used as fuel in internal combustion engines. Vaspack Energy partners with retail outlets spread across Nigeria."
              background="petrol"
              ButtonText="Explore More"
              link="/products/petrol"
            />
          )}
          {activeTab === "Kerosene" && (
            <BusinessOffer
              title="Kerosene"
              text="Kerosene, also known as paraffin, lamp oil, and coal oil (an obsolete term), is a combustible hydrocarbon liquid which is derived from petroleum. It is widely used as a fuel in households."
              background="kerosene"
              ButtonText="Explore More"
              link="/products/kerosene"
            />
          )}
          {activeTab === "Liquefied" && (
            <BusinessOffer
              title="Liquefied Petroleum Gas"
              text="Liquefied petroleum gas (LPG or LP gas), is a flammable mixture of hydrocarbon gases used as fuel in heating appliances, cooking equipment, and vehicles. We supply to your doorstep at your convenience and to all businesses that require our service"
              background="liquefied"
              ButtonText="Explore More"
              link="/products/liquefied"
            />
          )}
          {activeTab === "Lubricant" && (
            <BusinessOffer
              title="Lubricant"
              text="Our premium lubricants, meticulously crafted through advanced refining processes, are tailored to meet rigorous industry standards and guarantee optimal protection for your machinery. Trust in our quality assurance, as our products comply with the highest specifications."
              background="lubricants"
              ButtonText="Explore More"
              link="/products/lubricants"
            />
          )}
        </div>
      </section>

      {/* mobile */}
      <section className=" block sm:hidden relative ">
        {/* <div className="border-t-[1.5px] w-[100%] border-solid bg-OtherWhite mt-[1px] z-[-2] absolute top-0  "></div> */}

        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            className="mySwiper"
          >
            {OfferMap.map(({ background, title, cardText, cardTitle, key, link }) => (
              <div key={key}>
                <SwiperSlide>
                  <div className=" flex justify-between text-[0.9rem] sm:text-base font-medium mt-8 ">
                    <h3 className="border-t-[4px] w-full border-solid border-OtherGreen pt-2 sm:pt-4">
                      {title}
                    </h3>
                  </div>
                  <BusinessOffer
                    title={cardTitle}
                    text={cardText}
                    background={background}
                    ButtonText="Explore More"
                    link={`/${link}`}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
