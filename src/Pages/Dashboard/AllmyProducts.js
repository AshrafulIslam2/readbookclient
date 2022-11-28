import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { authcontext } from "../../AuthoContext/AuthContextProvider";
import Loding from "../../Components/Button/Loding";

const AllmyProducts = () => {
  const { user } = useContext(authcontext);
  const [advertise, setAdvertise] = useState(null);
  useEffect(() => {
    if (advertise !== null) {
      fetch("http://localhost:4000/advertise", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(advertise),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            toast.success("Upload done successfull  done successfully!");
            console.log(data);
          }
        });
    }
  }, [advertise]);
  //   axios
  //     .post("http://localhost:4000/advertise", {
  //       advertise,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  const {
    data: Catagorise = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellerproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/sellerproducts/${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });
  // const handledelte = (id, user, name, catagoryname) => {
  //   console.log(catagoryname);
  //   fetch(
  //     `http://localhost:4000/sellerproducts/seller/${id}/${user?.email}/${name}/${catagoryname}`,
  //     {
  //       method: "DELETE",
  //       headers: { "content-type": "application/json" },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       refetch();
  //     });
  // };
  if (isLoading) {
    return <Loding></Loding>;
  }
  console.log(Catagorise);
  return (
    <div>
      <button className="bg-teal-700  text-xs text-white rounded btn pt-0">
        <Link to="/dashboard/seller/padd">add products</Link>
      </button>
      <ToastContainer />
      <div className="grid sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-3 gap-5 my-10 mx-5">
        {Catagorise?.map &&
          Catagorise?.map(
            (catagory) =>
              catagory?.map &&
              catagory?.map((product) => (
                <div className="card  w-48 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src={product?.productimg} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    {/* <button
                      className="text-end pt-0 mt-0 text-red-700 text-xl"
                      // onClick={() =>
                      //   handledelte(
                      //     product?.productid,
                      //     user,
                      //     product?.productname,
                      //     product?.catagoryname
                      //   )
                      // }
                    >
                      Delete
                    </button> */}
                    <h2 className="card-title text-white font-bold font-serif">
                      {product?.productname.slice(0, 15)}
                    </h2>

                    <p>Price {product?.resaleprice}</p>

                    <p>Acctual Price {product?.newprice}</p>
                    <p>Used {product?.yearofuse} year</p>

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
