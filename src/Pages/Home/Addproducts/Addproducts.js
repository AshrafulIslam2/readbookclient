import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authcontext } from "../../../AuthoContext/AuthContextProvider";

const Addproducts = () => {
  const { user } = useContext(authcontext);
  const { data: addproducts = [] } = useQuery({
    queryKey: ["sellerproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://y-tan-one.vercel.app/advertise`);
      const data = res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-center text-2xl my-6 font-bold  tracking-widest font-serif text-black">
        Don't Forget to read those books Add section
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {addproducts.map((add) => (
          <section className="py-6 bg-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="">
                <img
                  alt=""
                  className="object-cover w-full bg-gray-500 aspect-square"
                  src={add.productimg}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Addproducts;
