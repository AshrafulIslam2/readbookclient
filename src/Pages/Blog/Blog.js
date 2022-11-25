import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="max-w-[1040px] mx-auto min-w-max">
      <h1 className="text-teal-700 font-bold text-3xl text-center font-serif my-5 ">
        My Daily Blogs
      </h1>
      <div className=" grid grid-cols-2 gap-6 mb-10">
        <div className="max-w-xs p-4 shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-none">
          <div className="flex justify-between pb-4 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?4"
                alt=""
                className="block object-cover object-center w-full rounded-none h-52 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Link rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-blue-400">
                  Facere ipsa nulla corrupti praesentium pariatur architecto
                </h3>
              </Link>
              <p className="leading-snug dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Repellat, excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xs p-4 shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-none">
          <div className="flex justify-between pb-4 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?4"
                alt=""
                className="block object-cover object-center w-full rounded-none h-52 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Link rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-blue-400">
                  Facere ipsa nulla corrupti praesentium pariatur architecto
                </h3>
              </Link>
              <p className="leading-snug dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Repellat, excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xs p-4 shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-none">
          <div className="flex justify-between pb-4 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?4"
                alt=""
                className="block object-cover object-center w-full rounded-none h-52 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Link rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-blue-400">
                  Facere ipsa nulla corrupti praesentium pariatur architecto
                </h3>
              </Link>
              <p className="leading-snug dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Repellat, excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xs p-4 shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-none">
          <div className="flex justify-between pb-4 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?4"
                alt=""
                className="block object-cover object-center w-full rounded-none h-52 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Link rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-blue-400">
                  Facere ipsa nulla corrupti praesentium pariatur architecto
                </h3>
              </Link>
              <p className="leading-snug dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Repellat, excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
