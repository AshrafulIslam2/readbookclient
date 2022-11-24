import React from "react";
import Button from "../../../Components/Button/Button";

const HommeBanner = () => {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative">
          <img
            alt=""
            src=" https://covers.openlibrary.org/b/id/13007273-L.jpg"
            className="absolute  max-w-sm rounded-lg shadow-2xl transition  ease-in-out delay-300 hover:rotate-12 duration-300"
          />

          <img
            alt=""
            src="https://covers.openlibrary.org/b/id/12671416-L.jpg"
            className="  max-w-sm   rounded-lg shadow-2xl transition  ease-in-out delay-300 hover:-rotate-12 duration-300"
          />
        </div>
        <div>
          {/* transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... */}
          <h1 className="text-5xl font-bold text-black font-serif">
            Read Books!
          </h1>
          <p className="py-6 text-2xl font-semibold font-sans text-teal-700">
            “So please, oh please, we beg, we pray, go throw your TV set away,
            and in its place you can install a lovely bookshelf on the wall.”
          </p>
          <Button>Start Reading</Button>
        </div>
      </div>
    </div>
  );
};

export default HommeBanner;
