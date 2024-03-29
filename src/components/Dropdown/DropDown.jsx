import { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = ({ text }) => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <div className=" flex items-center gap-0">
        <button
          type="button"
          onClick={toggleDropdown}
          //   focus:ring focus:border-OtherGreen
          className=" w-full hover:text-OtherGreen py-6 sm:py-0 flex items-center justify-between sm:justify-start border-solid active:text-Secondary border-[#2d2d2d33] border-b-[3px] sm:border-none text-left text-OtherBlack text-[1rem] sm:text-[0.6rem] md:text-[0.65rem]  lg:text-[0.85rem] xl:text-[0.9rem]   "
        >
          {selectedOption ? selectedOption : "Product and Services"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 16L6 10.3243L7.4 9L12 13.3514L16.6 9L18 10.3243L12 16Z"
              fill="#2D2D2D"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="relative bg-transparent shadow-none w-auto sm:w-full rounded-none sm:rounded-md sm:shadow-lg sm:absolute sm:bg-white text-OtherBlack ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <NavLink
              to="/products"
              onClick={() => handleOptionClick("Automotive")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              <p>Automotive</p>
            </NavLink>
            <NavLink
              to="/products/liquefied"
              onClick={() => handleOptionClick("Liquefied")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              <p>Liquefied</p>
            </NavLink>
            <NavLink
              to="/products/petrol"
              onClick={() => handleOptionClick("Petrol")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              <p>Petrol</p>
            </NavLink>
            <NavLink
              to="/products/kerosene"
              onClick={() => handleOptionClick("Kerosene")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              <p>Kerosene</p>
            </NavLink>
            <NavLink
              to="/products/lubricants"
              onClick={() => handleOptionClick("Lubricants")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              <p>Lubricants</p>
            </NavLink>
            <NavLink
              to="/products/vmi"
              onClick={() => handleOptionClick("Lubricants")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              <p>VMI</p>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
