import { useState } from "react";
import GreenLine from "../../components/GreenLine/GreenLine";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import DropdownAll from "../../components/Dropdown/DropdownAll";
import { useForm } from "react-hook-form";

export default function OrderBody() {
  const [selectedDeliveryValue, setSelectedDeliveryValue] = useState(null);
  const [selectedCylinderSize, setSelectedCylinderSize] = useState(null); 
  const [count, setCount] = useState(1);

  const handleClick = (action) => {
    if (action === "add") {
      setCount(count + 1);
    } else if (action === "subtract" && count > 1) {
      setCount(count - 1);
    }
  };

  const {
    register,
    // control,
    handleSubmit,
    // formState: { errors },
    // getValues,
    setValue,
    // reset,
  } = useForm({
    mode: "onBlur",
  });
  const handleError = (errors) => {};

  const handleDeliverySelect = (value) => {
    setSelectedDeliveryValue(value);
    setValue("Delivery", value);
  };
  const handleCylinderSize = (value) => {
    setSelectedCylinderSize(value);
    setValue("Delivery", value);
  };

  const registerOptions = {
    to: {
      value: "mmadujonathan@gmail.com",
    },
    toName: {
      value: "Vaspack Energy",
    },
    fullName: {
      required: "Full Name is required",
      minLength: {
        value: 3,
        message: "Full Name must have at least 3 characters",
      },
    },
    number: {
      required: "Phone Number is required",
      minLength: {
        value: 11,
        message: "Phone Number must have at least 11 characters",
      },
    },
    // text: {
    //   required: "Message is required",
    //   minLength: {
    //     value: 3,
    //     message: "Message must have at least 3 characters",
    //   },
    // },
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
        <form action="" onSubmit={handleSubmit(handleError)} className=" mt-7 ">
          <div className="gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
            <section className=" w-[100%] sm:w-[48%]">
            <input
              type="text"
              className=" py-2 px-[1%] w-[100%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
              placeholder="Full Name"
              {...register("fullName", registerOptions.fullName)}
            />
            </section>
           <section className=" w-[100%] sm:w-[48%]">
           <input
              type="number"
              className="w-[100%] appearance-none py-2 px-[1%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
              placeholder="Phone Number"
              {...register("number", registerOptions.number)}
            />
           </section>
          </div>

          <div className=" mt-5 gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
            <input
              type="text"
              className="w-[100%] sm:w-[48%] py-2 px-[1%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
              placeholder="Delivery Address"
            />
            <section className="w-[100%] sm:w-[48%]" >
            <DropdownAll
              options={[
                "Fast Delivery",
                "Dispatch",
              ]}
              onSelect={handleDeliverySelect}
              selectedValue={selectedDeliveryValue}
              choose="Delivery Type "
            />
            </section>
          </div>

          <div className=" mt-5 gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
          <section className="w-[100%] sm:w-[48%]" >
            <DropdownAll
              options={[
                "5kg",
                "10kg",
                "50kg",
                "100kg"
              ]}
              onSelect={handleCylinderSize}
              selectedValue={selectedCylinderSize}
              choose="Cylinder Size "
            />
            </section>
            <section className="w-[100%] relative sm:w-[48%] py-2 px-[1%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack ">
            Cylinder Quantity
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
