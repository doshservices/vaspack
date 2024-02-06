import React, { useState } from "react";
import GreenLine from "../../components/GreenLine/GreenLine";
import { Link } from "react-router-dom";
import DeliveryType from "../../components/Dropdown/DeliveryType";
import CylinderSize from "../../components/Dropdown/CylinderSize";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function OrderBody() {
  const [count, setCount] = useState(5);

  const handleClick = (action) => {
    if (action === "add") {
      setCount(count + 5);
    } else if (action === "subtract" && count > 5) {
      setCount(count - 5);
    }
  };
  return (
    <div className=" my-7 mx-[5%] ">
      <section>
        <GreenLine />
        <h3 className=" font-bold text-center sm:text-left uppercase text-base">Gas REFIL FORM</h3>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-16 font-medium text-[0.8rem] sm:text-[0.9rem] mt-4 ">
          <section className=" flex-col flex gap-2">
            <p>**Standard delivery = within 8 business hours.</p>
            <p>**Express Delivery Service = 90 minutes.</p>
          </section>
          <section className=" flex-col flex gap-2">
            <p>**NOTE: No More than 3 Cylinder Refills per order</p>
            <p>
              **For Enquiry,{" "}
              <Link to="/about" className=" text-Primary">
                Click here
              </Link>
            </p>
          </section>
        </div>
      </section>

      <section>
        <form action="" className=" mt-7 ">
          <div className="gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
            <input
              type="text"
              className="w-[100%] sm:w-[48%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
              placeholder="Full Name"
            />
            <input
              type="number"
              className="w-[100%] appearance-none sm:w-[48%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
              placeholder="Phone Number"
            />
          </div>

          <div className=" mt-5 gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
            <input
              type="text"
              className="w-[100%] sm:w-[48%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
              placeholder="Delivery Address"
            />
            <DeliveryType />
          </div>

          <div className=" mt-5 gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
            <CylinderSize />
            <section className="w-[100%] relative sm:w-[48%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack ">
              Quantity
              <div className=" flex items-center gap-2 text-[1.1rem] border py-1 px-3 absolute right-[3%] top-[50%] translate-y-[-50%] ">
                <div
                  className=" cursor-pointer  hover:text-Primary"
                  onClick={() => handleClick("subtract")}
                >
                  <FiMinus />
                </div>
                <span>{count}</span>
                <div
                  className=" cursor-pointer hover:text-Primary"
                  onClick={() => handleClick("add")}
                >
                  <FiPlus />
                </div>
              </div>
            </section>
          </div>

          <div className=" text-center mt-8 sm:mt-12">
            <button className=" bg-Secondary text-OtherWhite hover:bg-Primary rounded-[4px] py-2 lg:py-3 px-4 lg:px-6 font-medium text-[0.8rem]  xl:text-[0.9rem]">
              Proceed to Payment
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
