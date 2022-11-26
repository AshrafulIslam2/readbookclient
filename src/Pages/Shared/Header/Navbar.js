import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authcontext } from "../../../AuthoContext/AuthContextProvider";

const Navbar = () => {
  //const location = useLocation();
  const navigate = useNavigate();
  //const from = location?.state?.from?.pathname || "/";
  const links = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
    { name: "Allbooks", path: "/allbooks" },
  ];
  const { user, logout } = useContext(authcontext);
  const logoutuser = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
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
              <Link to={link.path} className="mx-2">
                {link.name}
              </Link>
            ))}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img alt="" src={user?.photoURL ? user.photoURL : ""} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-black rounded-box w-52"
              >
                {user?.email ? (
                  <Link className="mx-2" onClick={logoutuser}>
                    Logout
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="mx-2">
                      Login
                    </Link>
                    <Link to="/registration" className="mx-2">
                      SignUp
                    </Link>
                  </>
                )}
                <Link className="mx-2">Dashboard</Link>
                <Link className="mx-2" to="/profile">
                  Profile
                </Link>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
