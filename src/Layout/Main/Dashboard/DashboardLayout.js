import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../Pages/Shared/Header/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile border-2 max-w-[1040px] mx-auto ">
        <input id="mydashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="mydashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 bg-base-300  text-teal-700">
            <li>
              <Link>Sidebar Item 1</Link>
            </li>
            <li>
              <Link>Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
