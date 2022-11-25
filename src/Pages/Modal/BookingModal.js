import React, { useContext } from "react";
import { authcontext } from "../../AuthoContext/AuthContextProvider";

const BookingModal = ({ signalProdutcs }) => {
  const { user } = useContext(authcontext);
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="text-xl  text-center font-bold text-black font-serif">
            Your Booking details
          </h1>
          <form action="" className="text-center">
            <input
              type="text"
              placeholder="Your Name"
              name="yourname"
              className="input input-bordered my-3 input-sm w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user?.email ? user.email : "no email found"}
              className="input input-bordered my-3 input-sm w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered my-3 input-sm w-full max-w-xs"
            />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              className="input input-bordered my-3 input-sm w-full max-w-xs"
            />
            <input
              readOnly
              type="text"
              name="product"
              placeholder="product name"
              value={signalProdutcs.productname}
              className="input input-bordered my-3 input-sm w-full max-w-xs"
            />

            <input
              readOnly
              type="text"
              name="productprice"
              placeholder="product price"
              className="input input-bordered my-3 input-sm w-full max-w-xs"
              value={signalProdutcs.resaleprice}
            />
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
