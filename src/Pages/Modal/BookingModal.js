import React, { useContext } from "react";
import { authcontext } from "../../AuthoContext/AuthContextProvider";
import { GiCrossMark } from "react-icons/gi";
import axios, { isCancel, AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import Loding from "../../Components/Button/Loding";
import { toast, ToastContainer } from "react-toastify";

const BookingModal = ({ signalProdutcs }) => {
  const { user } = useContext(authcontext);
  const handlebooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const customername = form.yourname.value;
    const customeremail = form.email.value;
    const customerphone = form.phone.value;
    const meetlocation = form.location.value;
    const productid = signalProdutcs.productid;
    const productname = form.product.value;
    const productsellprice = form.productprice.value;
    const bookinifo = {
      customername,
      customeremail,
      customerphone,
      meetlocation,
      productid,
      productname,
      productsellprice,
    };

    mutate(bookinifo);
  };
  const bookingifon = async (data) => {
    return axios.post("http://localhost:4000/bookininfo", data);
  };

  const { mutate, isLoading } = useMutation(bookingifon, {
    onSuccess: (data) => {
      if (data.data.acknowledged) {
        toast.success("Booking Success Full");
      } else {
        toast.error(data.data.message);
      }
      console.log("booking data", data);
    },
  });
  if (isLoading) {
    return <Loding></Loding>;
  }
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="">
              <GiCrossMark className="text-3xl text-teal-700" />
            </label>
          </div>
          <h1 className="text-xl  text-center font-bold text-black font-serif">
            Your Booking details
          </h1>
          <form action="" className="text-center" onSubmit={handlebooking}>
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
            <input type="submit" className="btn block w-full bg-teal-700" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
