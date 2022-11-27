import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { authcontext } from "../../AuthoContext/AuthContextProvider";
import axios from "axios";
const AllmyProducts = () => {
  const { user } = useContext(authcontext);
  const [advertise, setAdvertise] = useState(null);
  axios
    .post("http://localhost:4000/advertise", {
      advertise,
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const { data: Catagorise = [] } = useQuery({
    queryKey: ["sellerproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/sellerproducts/${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <div>
      <button className="bg-teal-700  text-xs text-white rounded btn pt-0">
        Add products
      </button>
      <div className="grid sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-3 gap-5 my-10 mx-5">
        {Catagorise.map((catagory) =>
          catagory.map((product) => (
            <div className="card  w-48 bg-base-100 shadow-xl image-full">
              <figure>
                <img src={product.productimg} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white font-bold font-serif">
                  {product.productname}
                </h2>

                <p>Price {product.resaleprice}</p>

                <p>Acctual Price {product.newprice}</p>
                <p>Used {product.yearofuse} year</p>

                <div className="card-actions justify-end items-center">
                  <button
                    className={` bg-teal-700 px-4 text-xl text-white rounded btn pt-0`}
                    onClick={() => setAdvertise(product)}
                  >
                    A dvertise
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllmyProducts;
