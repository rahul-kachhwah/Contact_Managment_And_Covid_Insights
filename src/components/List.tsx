import React from "react";
import { Link } from "react-router-dom";
import { ListProps } from "../types/ItemType";

const List: React.FC<ListProps> = ({ to, label, icon }) => {
  return (
    <li>
      <Link
        to={to}
        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800  tracking-wide"
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          {icon}
        </span>
        <span className="ml-2 truncate text-sm font-serif font-semibold ">{label}</span>
      </Link>
    </li>
  );
};

export default List;
