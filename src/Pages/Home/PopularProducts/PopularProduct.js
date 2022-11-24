import React from "react";

const PopularProduct = () => {
  return (
    <div>
      <h1 className="text-center text-2xl my-6 font-bold  tracking-widest font-serif text-black">
        Most Popular Book Of the Year
      </h1>
      <div className="grid grid-cols-12  ">
        <div className="col-span-6   flex justify-center border-8">
          <img
            alt=""
            src=" https://covers.openlibrary.org/b/id/13007273-L.jpg"
            className="  max-w-sm rounded-lg shadow-2xl transition  ease-in-out delay-300 hover:scale-110 duration-300 m-5"
          />
        </div>
        <div className="grid grid-rows-2 col-span-6  border-2">
          <div className="flex justify-evenly border-8">
            <img
              alt=""
              src=" https://covers.openlibrary.org/b/id/12882777-L.jpg"
              className="  max-w-sm rounded-lg shadow-2xl transition  ease-in-out delay-300 hover:scale-110 duration-300 h-52 m-3 "
            />
            <img
              alt=""
              src=" https://covers.openlibrary.org/b/id/13008803-L.jpg"
              className="  max-w-sm rounded-lg shadow-2xl transition  ease-in-out delay-300 hover:scale-110 duration-300 h-52 m-3"
            />
          </div>
          <div className="flex justify-evenly border-8">
            <img
              alt=""
              src=" https://covers.openlibrary.org/b/id/12726999-L.jpg"
              className="  max-w-sm rounded-lg shadow-2xl transition  ease-in-out delay-300 hover:scale-110 duration-300 h-52 m-3"
            />
            <img
              alt=""
              src=" https://covers.openlibrary.org/b/id/12992963-L.jpg"
              className="  max-w-sm rounded-lg shadow-2xl transition  ease-in-out delay-300 hover:scale-110 duration-300 h-52 m-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
