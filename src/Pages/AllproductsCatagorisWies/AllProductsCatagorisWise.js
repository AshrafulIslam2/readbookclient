import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BookingModal from "../Modal/BookingModal";
import { FaGalacticRepublic, FaHome } from "react-icons/fa";

const AllProductsCatagorisWise = () => {
  const Catgories = useLoaderData();
  const name = Catgories.catagoiyname;
  const products = Catgories.products;
  const [signalProdutcs, SetsignalProdutcs] = useState(null);

  return (
    <div className="max-w-[1040px] mx-auto bg-gray-100">
      <h1 className="text-5xl font-serif text-center py-8">{name}</h1>
      <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  ">
        {products?.map &&
          products?.map((product) => (
            <div className="p-6 rounded-md shadow-md bg-white  flex flex-col items-center m-6 ">
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
                {product?.productsdetails.length < 100
                  ? product?.productsdetails
                  : product?.productsdetails.slice(0, 100)}
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
                className="bg-teal-700 px-4 text-xl text-white rounded btn pt-0"
                onClick={() => SetsignalProdutcs(product)}
              >
                Book Now
              </label>
            </div>
          ))}
      </div>
      {signalProdutcs && (
        <BookingModal signalProdutcs={signalProdutcs}></BookingModal>
      )}
      <ToastContainer />
    </div>
  );
};

export default AllProductsCatagorisWise;
