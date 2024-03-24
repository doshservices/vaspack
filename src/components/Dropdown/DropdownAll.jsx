import React, { useState, useRef, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";

const DropdownAll = ({
  options,
  onSelect,
  selectedValue,
  choose
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  const handleDropdownFocus = (event) => {
    event.preventDefault(); // Prevent the default focus behavior
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onFocus={handleDropdownFocus}
        className="appearance-none w-full py-2 px-[2%] bg-white border-OtherBlack border-[1px] text-[0.9rem] sm:text-base flex items-center justify-between"
      >
        <span className=" text-OtherBlack ">{selectedValue !== null ? selectedValue : choose}</span>
        <div className="text-[1.5rem] ">
          <MdArrowDropDown />
        </div>
      </button>
      {isOpen && (
        <div className="absolute mt-2 py-2 w-full bg-white rounded-md shadow-lg text-sm z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer font-medium  rounded-[4px]  py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownAll;
