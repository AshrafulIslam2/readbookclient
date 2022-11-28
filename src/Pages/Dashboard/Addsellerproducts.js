import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { authcontext } from "../../AuthoContext/AuthContextProvider";

const Addsellerproducts = () => {
  const { user } = useContext(authcontext);
  const imageHotKey = process.env.REACT_APP_imgbb_key;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const image = data.yourphoto[0];
    const phone = data.phone.toString();
    const formData = new FormData();
    formData.append("image", image);
    const Url = `https://api.imgbb.com/1/upload?key=${imageHotKey}`;
    fetch(Url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((Imgdata) => {
        if (Imgdata.success) {
          const imageUrl = Imgdata.data.url;
          const uploadproducts = {
            catagoiyname: "Book Lover Choice",
            productname: data.product,
            productimg: imageUrl,
            newprice: data.productnewprice,
            resaleprice: data.productresaleprice,
            productsdetails: data.pdetails,
            salleremail: data.salleremail,
            sallername: data.sallername,
            location: data.location,
            yearofuse: data.yearofuse,
          };
          fetch(`http://localhost:4000/saller/upload`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(uploadproducts),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              reset();
              toast.success("Upload done successfull  done successfully!");
            });
        }
      });
  };
  return (
    <div className=" max-w-[1040px] mx-auto min-w-max sm:flex flex-col  md:flex-col items-center lg:flex-row">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 rounded-none">
        <div className="card-body">
          <ToastContainer />
          <h1 className="text-xl font-bold text-center font-serif">
            Add Products
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="label">
              <span className=" font-serif">Products Name</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("product", { required: true })}
              aria-invalid={errors.product ? "true" : "false"}
            />
            {errors.product?.type === "required" && (
              <p className="text-sm text-red-800" role="alert">
                Name is required
              </p>
            )}
            <label className="label">
              <span className=" font-serif">Products New price</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("productnewprice", { required: true })}
              aria-invalid={errors.productnewprice ? "true" : "false"}
            />
            {errors.productnewprice?.type === "required" && (
              <p className="text-sm text-red-800" role="alert">
                Product new price is required
              </p>
            )}
            <label className="label">
              <span className=" font-serif">Products Resale Price</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("productresaleprice", { required: true })}
              aria-invalid={errors.productresaleprice ? "true" : "false"}
            />
            {errors.productresaleprice?.type === "required" && (
              <p className="text-sm text-red-800" role="alert">
                selling price
              </p>
            )}
            <label className="label">
              <span className=" font-serif">Product Details</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("pdetails", { required: true })}
              aria-invalid={errors.pdetails ? "true" : "false"}
            />
            {errors.pdetails?.type === "required" && (
              <p className="text-sm text-red-800" role="alert">
                details is required
              </p>
            )}
            <label className="label">
              <span className=" font-serif">Seller Name</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("sallername", { required: true })}
              aria-invalid={errors.sallername ? "true" : "false"}
            />
            {errors.sallername?.type === "required" && (
              <p className="text-sm text-red-800" role="alert">
                saller name is required
              </p>
            )}
            <label className="label">
              <span className=" font-serif">Seller Email</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("salleremail", { required: true })}
              aria-invalid={errors.salleremail ? "true" : "false"}
            />
            {errors.salleremail?.type === "required" && (
              <p className="text-sm text-red-800" role="alert">
                Seller email is required
              </p>
            )}
            <label className="label">
              <span className=" font-serif">Yaer of use</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("yearofuse", { required: true })}
              aria-invalid={errors.yearofuse ? "true" : "false"}
            />
            {errors.yearofuse?.type === "required" && (
              <p className="text-sm text-red-800" role="alert">
                Year is required
              </p>
            )}
            <label className="label">
              <span className=" font-serif">Products Location</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("location", { required: true })}
              aria-invalid={errors.location ? "true" : "false"}
            />
            {errors.location?.type === "required" && (
              <p className="text-sm text-red-800" role="alert">
                Location is required
              </p>
            )}
            <label className="label">
              <span className="label-text font-serif">Your Phone Number</span>
            </label>
            <input
              className="input input-sm rounded-none input-accent"
              {...register("phone")}
            />
            <label className="label">
              <span className="label-text font-serif">Upload your Photo</span>
            </label>
            <input
              type="file"
              className="input input-sm rounded-none input-accent"
              {...register("yourphoto")}
            />
            <input
              type="submit"
              value="Upload"
              className="input input-sm rounded-none input-accent font-serif bg-teal-700 block mx-auto mt-4 text-base font-bold text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addsellerproducts;
