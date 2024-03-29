import React, { useState } from "react";
import IndustriesCard from "./IndustriesCard";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import AnimatedCounter from "../../../components/AnimatedCounter/AnimatedCounter";
import GreenLine from "../../../components/GreenLine/GreenLine";

export default function ProductsBody({title}) {
  const [activeTab, setActiveTab] = useState("Agriculture"); // Set the default active tab
  const handleTabDesktopClick = (tab) => {
    setActiveTab(tab);
  };
  const handleTabClick = (tabName) => {
    // Fix: Use conditional check to avoid infinite loop
    if (activeTab === tabName) {
      setActiveTab("");
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <div className="my-6 sm:my-7 px-[5%] ">
      <section>
        <section>
          <div className=" ">
           
            <GreenLine text={title} />
          </div>
          <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
            Vaspack Energy Limited is an indigenous downstream company in the
            Oil & Gas sector with interests in procurement, marketing and
            distribution of Petroleum Products (Automotive Gas Oil (AGO),
            Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using
            innovative technology.
          </p>
        </section>

        <div className=" flex justify-between pt-6 lg:pt-8 text-OtherBlack text-[0.7rem] ssm:text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-semibold leading-[145%] ">
          <div>
            <h3 className=" flex justify-center text-[1.5rem] ssm:text-[2.2rem] sm:text-[3rem] md:text-[3.8rem]  lg:text-[4.5rem] xl:text-[5rem] font-semibold text-Primary leading-[125%] ">
              <span><AnimatedCounter start={0} end={22} duration={2} /></span>
            </h3>
            <p className=" text-center">Nationwide Depots</p>
          </div>
          <div className=" border-OtherBlack border-r-[3px] border-solid  " />
          <div>
            <h3 className=" flex justify-center text-[1.5rem] ssm:text-[2.2rem] sm:text-[3rem] md:text-[3.8rem]  lg:text-[4.5rem] xl:text-[5rem] font-semibold text-Primary leading-[125%] ">
              <span><AnimatedCounter start={0} end={100} duration={3} /></span>
            </h3>
            <p className=" text-center">Truck Fleet</p>
          </div>
          <div className=" border-OtherBlack border-r-[3px] border-solid " />
          <div>
            <h3 className=" flex justify-center text-[1.5rem] ssm:text-[2.2rem] sm:text-[3rem] md:text-[3.8rem]  lg:text-[4.5rem] xl:text-[5rem] font-semibold text-Primary leading-[125%] ">
              <span><AnimatedCounter start={1000} end={3048} duration={3} /></span>
              <span>
              km
                <sup className="text-[1rem]  ssm:text-[1.5rem] sm:text-[2.3rem] md:text-[2.6rem] lg:text-[2.8rem] xl:text-[3rem]">
                  3
                </sup>
            </span>
            </h3>
            <p className=" text-center">Storage Capacity</p>
          </div>
        </div>
      </section>

      <section className=" mt-6 xl:mt-7">
        <section>
          <div className=" ">
            <GreenLine text="Industries We Serve" />
          </div>
          <p className=" text-[0.9rem] mt-2 sm:mt-2 font-medium tracking-[0.14px] leading-[214%] text-justify ">
            Vaspack Energy Limited is an indigenous downstream company in the
            Oil & Gas sector with interests in procurement, marketing and
            distribution of Petroleum Products (Automotive Gas Oil (AGO),
            Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using
            innovative technology.
          </p>
        </section>

        {/* desktop */}
        <div className="hidden sm:flex justify-between mt-10">
          <div className=" w-[40%] md:w-[43%] lg:w-[48%] flex flex-col gap-3 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] pl-[0 %] font-medium leading-[180%]">
            <div
              onClick={() => handleTabDesktopClick("Agriculture")}
              className=" cursor-pointer"
            >
              <h2 className=" ">Agriculture</h2>
              <hr
                className={` mt-1 border-solid border-[1.5px] ${
                  activeTab === "Agriculture"
                    ? "border-OtherGreen"
                    : "border-[#2d2d2d33]"
                }   `}
              />
            </div>

            <div
              onClick={() => handleTabDesktopClick("Industrial")}
              className=" cursor-pointer"
            >
              <h2 className=" ">Industrial</h2>
              <hr
                className={` mt-1 border-solid border-[1.5px] ${
                  activeTab === "Industrial"
                    ? "border-OtherGreen"
                    : "border-[#2d2d2d33]"
                }   `}
              />
            </div>

            <div
              onClick={() => handleTabDesktopClick("Residential")}
              className=" cursor-pointer"
            >
              <h2 className=" ">Residential</h2>
              <hr
                className={` mt-1 border-solid border-[1.5px] ${
                  activeTab === "Residential"
                    ? "border-OtherGreen"
                    : "border-[#2d2d2d33]"
                }  `}
              />
            </div>
            <div
              onClick={() => handleTabDesktopClick("Small-Business")}
              className=" cursor-pointer"
            >
              <h2 className=" ">Small Business</h2>
              <hr
                className={` mt-1 border-solid border-[1.5px] ${
                  activeTab === "Small-Business"
                    ? "border-OtherGreen"
                    : "border-[#2d2d2d33]"
                }   `}
              />
            </div>
            <div
              onClick={() => handleTabDesktopClick("Commercial")}
              className=" cursor-pointer"
            >
              <h2 className=" ">Commercial</h2>
              <hr
                className={` mt-1 border-solid border-[1.5px] ${
                  activeTab === "Commercial"
                    ? "border-OtherGreen"
                    : "border-[#2d2d2d33]"
                }  `}
              />
            </div>
            <div
              onClick={() => handleTabDesktopClick("Logistics")}
              className=" cursor-pointer"
            >
              <h2 className=" ">Logistics</h2>
              <hr
                className={` mt-1 border-solid border-[1.5px] ${
                  activeTab === "Logistics"
                    ? "border-OtherGreen"
                    : "border-[#2d2d2d33]"
                } `}
              />
            </div>
          </div>

          {activeTab === "Agriculture" && (
            <div className="w-[56%] md:w-[53%] lg:w-[48%] ">
              <IndustriesCard
                title="Agriculture"
                text="Experience a synergy of excellence as we fuel progress in the heart of
                agriculture, providing reliability and innovation to cultivate a
                sustainable future."
                background="agriculture-industry"
              />
            </div>
          )}
          {activeTab === "Industrial" && (
            <div className="w-[56%] md:w-[53%] lg:w-[48%] ">
              <IndustriesCard
                title="Industrial"
                text="Embark on a journey of unparalleled excellence as we drive progress in the heart of industrial energy solutions, delivering reliability and innovation to power a sustainable future."
                background="industrial-industry"
              />
            </div>
          )}
          {activeTab === "Residential" && (
            <div className="w-[56%] md:w-[53%] lg:w-[48%] ">
              <IndustriesCard
                title="Residential"
                text="Join us in cultivating a sustainable future through the power of innovation and reliability in the dynamic realm of residential services, where your comfort and well-being are our top priorities."
                background="residential-industry"
              />
            </div>
          )}
          {activeTab === "Small-Business" && (
            <div className="w-[56%] md:w-[53%] lg:w-[48%] ">
              <IndustriesCard
                title="Small-Business"
                text="Small Business: Our dedication to excellence ensures a reliable and innovative partnership, fostering growth that not only meets but exceeds the unique demands of small enterprises."
                background="small-business-industry"
              />
            </div>
          )}
          {activeTab === "Commercial" && (
            <div className="w-[56%] md:w-[53%] lg:w-[48%] ">
              <IndustriesCard
                title="Commercial"
                text="Enjoy the synergy of tailored solutions and unwavering commitment as we elevate standards in commercial services."
                background="commercial-industry"
              />
            </div>
          )}
          {activeTab === "Logistics" && (
            <div className="w-[56%] md:w-[53%] lg:w-[48%] ">
              <IndustriesCard
                title="Logistics"
                text="Experience the synergy of streamlined operations and unwavering commitment as we elevate standards in logistics services."
                background="logistics-industry"
              />
            </div>
          )}
        </div>

        {/* mobile */}
        <div className="block sm:hidden mt-10">
          <div className=" w-[100%] flex flex-col gap-3 text-[1rem] pl-[2%] font-medium leading-[180%]">
            <div
              onClick={() => handleTabClick("Agriculture")}
              className="cursor-pointer"
            >
              <hr
                className={` mb-3 border-solid border-[2px] border-[#2d2d2d33]  `}
              />
              <div className=" flex justify-between items-center">
                <h2 className="">Agriculture</h2>

                <span
                  className={`transform rotate-${
                    activeTab === "Agriculture" ? "180" : "0"
                  } transition-transform duration-500`}
                >
                  <div className=" text-OtherBlack ">
                    {activeTab === "Agriculture" ? (
                      <PiMinusBold />
                    ) : (
                      <PiPlusBold />
                    )}
                  </div>
                </span>
              </div>
            </div>
            {activeTab === "Agriculture" && (
              <div className="w-[100%] ">
                <IndustriesCard
                  title="Agriculture"
                  text="Experience a synergy of excellence as we fuel progress in the heart of
                agriculture, providing reliability and innovation to cultivate a
                sustainable future."
                  background="agriculture-industry"
                />
              </div>
            )}

            <div
              onClick={() => handleTabClick("Industrial")}
              className=" cursor-pointer"
            >
              <hr
                className={` mb-3 border-solid border-[2px] border-[#2d2d2d33] `}
              />
              <div className=" flex justify-between items-center">
                <h2 className="">Industrial</h2>

                <span
                  className={`transform rotate-${
                    activeTab === "Industrial" ? "180" : "0"
                  } transition-transform duration-500`}
                >
                  <div className=" text-OtherBlack ">
                    {activeTab === "Industrial" ? (
                      <PiMinusBold />
                    ) : (
                      <PiPlusBold />
                    )}
                  </div>
                </span>
              </div>
            </div>
            {activeTab === "Industrial" && (
              <div className="w-[100%] ">
                <IndustriesCard
                  title="Industrial"
                  text="Embark on a journey of unparalleled excellence as we drive progress in the heart of industrial energy solutions, delivering reliability and innovation to power a sustainable future."
                  background="industrial-industry"
                />
              </div>
            )}

            <div
              onClick={() => handleTabClick("Residential")}
              className=" cursor-pointer"
            >
              <hr
                className={` mb-3 border-solid border-[2px] border-[#2d2d2d33]  `}
              />
              <div className=" flex justify-between items-center">
                <h2 className="">Residential</h2>

                <span
                  className={`transform rotate-${
                    activeTab === "Residential" ? "180" : "0"
                  } transition-transform duration-500`}
                >
                  <div className=" text-OtherBlack ">
                    {activeTab === "Residential" ? (
                      <PiMinusBold />
                    ) : (
                      <PiPlusBold />
                    )}
                  </div>
                </span>
              </div>
            </div>
            {activeTab === "Residential" && (
              <div className="w-[100%] ">
                <IndustriesCard
                  title="Residential"
                  text="Join us in cultivating a sustainable future through the power of innovation and reliability in the dynamic realm of residential services, where your comfort and well-being are our top priorities."
                  background="residential-industry"
                />
              </div>
            )}

            <div
              onClick={() => handleTabClick("Small-Business")}
              className=" cursor-pointer"
            >
              <hr
                className={` mb-3 border-solid border-[2px] border-[#2d2d2d33]   `}
              />
              <div className=" flex justify-between items-center">
                <h2 className="">Small Business</h2>

                <span
                  className={`transform rotate-${
                    activeTab === "Small-Business" ? "180" : "0"
                  } transition-transform duration-500`}
                >
                  <div className=" text-OtherBlack ">
                    {activeTab === "Small-Business" ? (
                      <PiMinusBold />
                    ) : (
                      <PiPlusBold />
                    )}
                  </div>
                </span>
              </div>
            </div>
            {activeTab === "Small-Business" && (
              <div className="w-[100%] ">
                <IndustriesCard
                  title="Small-Business"
                  text="Our dedication to excellence ensures a reliable and innovative partnership, fostering growth that not only meets but exceeds the unique demands of small enterprises."
                  background="small-business-industry"
                />
              </div>
            )}

            <div
              onClick={() => handleTabClick("Commercial")}
              className=" cursor-pointer"
            >
              <hr
                className={` mb-3 border-solid border-[2px] border-[#2d2d2d33]  `}
              />
              <div className=" flex justify-between items-center">
                <h2 className="">Commercial</h2>

                <span
                  className={`transform rotate-${
                    activeTab === "Commercial" ? "180" : "0"
                  } transition-transform duration-500`}
                >
                  <div className=" text-OtherBlack ">
                    {activeTab === "Commercial" ? (
                      <PiMinusBold />
                    ) : (
                      <PiPlusBold />
                    )}
                  </div>
                </span>
              </div>
            </div>
            {activeTab === "Commercial" && (
              <div className="w-[100%] ">
                <IndustriesCard
                  title="Commercial"
                  text="Enjoy the synergy of tailored solutions and unwavering commitment as we elevate standards in commercial services."
                  background="commercial-industry"
                />
              </div>
            )}
            <div
              onClick={() => handleTabClick("Logistics")}
              className=" cursor-pointer"
            >
              <hr
                className={` mb-3 border-solid border-[2px] border-[#2d2d2d33]  `}
              />
              <div className=" flex justify-between items-center">
                <h2 className="">Logistics</h2>

                <span
                  className={`transform rotate-${
                    activeTab === "Logistics" ? "180" : "0"
                  } transition-transform duration-500`}
                >
                  <div className=" text-OtherBlack ">
                    {activeTab === "Logistics" ? (
                      <PiMinusBold />
                    ) : (
                      <PiPlusBold />
                    )}
                  </div>
                </span>
              </div>
            </div>
          </div>
          {activeTab === "Logistics" && (
            <div className="w-[100%] ">
              <IndustriesCard
                title="Logistics"
                text="Experience the synergy of streamlined operations and unwavering commitment as we elevate standards in logistics services."
                background="logistics-industry"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
