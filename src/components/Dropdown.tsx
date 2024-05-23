import React, { useState } from "react";
import { DropdownProps } from "../types/ItemType";

const Dropdown: React.FC<DropdownProps> = ({ setStatus }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [selectedStatus, setSelectedStatus] = useState("Status"); // State to store selected status

  // Function to handle status toggle
  const handleStatusToggle = (newStatus: string) => {
    setSelectedStatus(newStatus);
    setStatus(newStatus);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-100 focus:outline-none "
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedStatus}{" "}
        <svg
          className="w-4 h-4 inline ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>
      {dropdownOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <button
            type="button"
            className="w-full px-4 py-1.5 text-left text-gray-700 hover:bg-blue-100"
            onClick={() => handleStatusToggle("Active")}
          >
            Active
          </button>
          <button
            type="button"
            className="w-full px-4 py-1.5 text-left text-gray-700 hover:bg-blue-100"
            onClick={() => handleStatusToggle("Inactive")}
          >
            Inactive
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
