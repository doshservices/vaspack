import { useState } from "react";

const DropdownOther = () => {
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
          {selectedOption ? selectedOption : "Service Type"}
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
        <div className="origin-top-right absolute right-0 w-full rounded-md shadow-lg bg-white text-OtherBlack ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p
              onClick={() => handleOptionClick("Automotive")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              Automotive
            </p>
            <p
              onClick={() => handleOptionClick("Liquefied")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              Liquefied
            </p>
            <p
              onClick={() => handleOptionClick("Petrol")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              Petrol
            </p>
            <p
              onClick={() => handleOptionClick("Kerosene")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              Kerosene
            </p>
            <p
              onClick={() => handleOptionClick("Lubricants")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              Lubricants
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownOther;
