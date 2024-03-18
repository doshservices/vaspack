import { useState } from "react";

const CylinderSize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = ({text}) => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[100%] sm:w-[48%] inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
        //   focus:ring focus:border-OtherGreen
          className="inline-flex justify-between w-full border-solid border-[1px] text-OtherBlack border-OtherBlack px-[2%] py-2 bg-white text-[0.9rem] sm:text-base leading-[212.5%] outline-none "
        >
          {selectedOption ? selectedOption : "Cylinder Size"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path d="M15 18.75L8.75 12.5H21.25L15 18.75Z" fill="#2D2D2D" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right z-[3]  absolute right-0 w-full rounded-md shadow-lg bg-white text-OtherBlack ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p
              onClick={() => handleOptionClick("10kg")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              10kg
            </p>
            <p
              onClick={() => handleOptionClick("20kg")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              20kg
            </p>
            <p
              onClick={() => handleOptionClick("50kg")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              5kg
            </p>
            <p
              onClick={() => handleOptionClick("100kg")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              100kg
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CylinderSize;
