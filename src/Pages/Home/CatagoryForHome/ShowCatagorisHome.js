import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authcontext } from "../../../AuthoContext/AuthContextProvider";
import { FaGalacticRepublic, FaHome } from "react-icons/fa";

const ShowCatagorisHome = ({ catagory, SetsignalProdutcs }) => {
  const { user } = useContext(authcontext);
  console.log(catagory);
  return (
    <div className="">
      <div>
        <h1 className="text-center text-2xl my-10 font-bold  tracking-widest font-serif text-black">
          {catagory.catagoiyname}
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-100">
        {catagory?.products &&
          catagory?.products?.map((product) => (
            <div className="max-w-sm p-6 rounded-md shadow-md bg-white dark:text-gray-50 flex flex-col items-center m-6">
              {product?.buletick && (
                <h1 className=" w-full text-xl font-mono text-red-600 flex justify-end items-center font-extrabold">
                  <FaGalacticRepublic className="text-red-800 text-4xl" />{" "}
                  Verified
                </h1>
              )}

              <img
                src={product?.productimg}
                alt=""
                className=" w-full rounded-md h-72 max-w-sm  shadow-2xl transition  ease-in-out delay-300 hover:-translate-y-6 duration-300 m-5"
              />
              <div className="mt-6 mb-2">
                <span className="block text-2xl font-medium tracking-widest uppercase text-teal-700 ">
                  {product?.productname}
                </span>
              </div>
              <p className="dark:text-gray-100 my-4">
                {product?.productsdetails?.length < 100
                  ? product?.productsdetails
                  : product?.productsdetails?.slice(0, 100)}
                ...
              </p>
              <div className="flex justify-between text-base font-serif font-semibold">
                <p className="mr-3">
                  New Price <s>{product?.newprice}</s>{" "}
                </p>
                <p>Resale Price {product?.resaleprice}</p>
              </div>
              <div className="flex my-3">
                <p className="flex items-center pr-3">
                  <FaHome />
                  {product?.location}
                </p>

                <p className="">Year of use {product?.yearofuse}</p>
              </div>
              <p className="text-base-300 pb-2">{product?.uploaddate}</p>
              <label
                htmlFor="my-modal-6"
                className={`${
                  user?.email ? "visible" : "hidden"
                }  bg-teal-700 px-4 text-xl text-white rounded btn pt-`}
                onClick={() => SetsignalProdutcs(product)}
              >
                Book Now
              </label>
            </div>
          ))}
      </div>
      <button className="w-full bg-teal-700 text-2xl font-bold text-white py-3">
        <Link to={`catagories/${catagory._id}`}>See More</Link>
      </button>
    </div>
  );
};

export default ShowCatagorisHome;
