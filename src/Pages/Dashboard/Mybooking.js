import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authcontext } from "../../AuthoContext/AuthContextProvider";

const Mybooking = () => {
  const { user } = useContext(authcontext);
  console.log(user.email);
  const url = `https://y-tan-one.vercel.app/bookininfo?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["userbookininfo", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });
  console.log(bookings);
  return (
    <div className="overflow-x-auto max-w-full">
      <h1 className="text-4xl font-serif text-center my-10">My Booking </h1>
      <table className="table w-full  max-w-full mx-4">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Cutomer Name</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Meet Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {bookings?.map((book) => (
            <tr>
              <th>{book?.customername}</th>
              <td>{book?.productname}</td>
              <td>{book?.productsellprice} Taka</td>
              <td>{book?.meetlocation.toUpperCase()}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* <!-- foot --> */}
        <tfoot>
          <tr>
            <th>Cutomer Name</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Meet Location</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Mybooking;
