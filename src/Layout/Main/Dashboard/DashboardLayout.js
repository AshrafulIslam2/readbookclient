import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authcontext } from "../../../AuthoContext/AuthContextProvider";
import useAdmin from "../../../hooks/useAdmin";
import useSeller from "../../../hooks/useSaller";
import Navbar from "../../../Pages/Shared/Header/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(authcontext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
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
              <Link to="/dashboard">My Bookings</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/dashboard/admin">All User</Link>
              </li>
            )}
            {isSeller && (
              <li>
                <Link
                  to="/dashboard/seller
                "
                >
                  All My Products
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
