import React from "react";
import { RiContactsBook2Line } from "react-icons/ri";
import { TbMapSearch } from "react-icons/tb";
import List from "./List";
import logoContacts from "../assets/contacts.png";
import logoChartsMaps from "../assets/line-chart.png";
import { useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Determine logo based on current path
  let logo;
  if (location.pathname === "/contacts") {
    logo = logoContacts;
  } else if (location.pathname === "/charts_maps") {
    logo = logoChartsMaps;
  } else {
    logo = logoContacts; // Default logo if path doesn't match
  }

  return (
    <div className="flex flex-row bg-gradient-to-b from-white to-cyan-100 shadow-lg border border-e-2 ">
      <div className="flex flex-col w-56  overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md bg-slate-100">
          <img src={logo} alt="Logo" className=" w-12 h-12" />
        </div>
        <ul className="flex flex-col py-4">
          {/* Contacts list item */}
          <List
            to="/contacts"
            label="Contacts"
            icon={<RiContactsBook2Line />}
          />
          {/* Charts & Maps list item */}
          <List
            to="/charts_maps"
            label="Charts & Maps"
            icon={<TbMapSearch />}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
