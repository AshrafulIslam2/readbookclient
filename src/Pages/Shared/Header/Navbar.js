import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [{ name: "Home" }, { name: "Blogs" }, { name: "Allbooks" }];
  return (
    <div className="bg-black  max-w-[1040px] mx-auto min-w-max">
      <div className="navbar bg-black">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-white">
            BookS
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-white flex items-center">
            {links.map((link) => (
              <Link className="mx-2">{link.name}</Link>
            ))}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img alt="" src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-black rounded-box w-52"
              >
                <Link className="mx-2"> Login</Link>
                <Link className="mx-2"> SignUp</Link>
                <Link className="mx-2">Dashboard</Link>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
