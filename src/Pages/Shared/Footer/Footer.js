import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" max-w-[1040px] mx-auto min-w-max px-4 py-8 bg-black">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full text-white font-bold">
            BookS
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 text-white">
            <li>
              <Link rel="noopener noreferrer" href="#">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link rel="noopener noreferrer" href="#">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 text-white">
          <li>
            <Link rel="noopener noreferrer" href="#">
              Instagram
            </Link>
          </li>
          <li>
            <Link rel="noopener noreferrer" href="#">
              Facebook
            </Link>
          </li>
          <li>
            <Link rel="noopener noreferrer" href="#">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
