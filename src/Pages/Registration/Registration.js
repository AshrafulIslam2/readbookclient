import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authcontext } from "../../AuthoContext/AuthContextProvider";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const { createNewUser } = useContext(authcontext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createNewUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Registration done successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200 max-w-[1040px] mx-auto">
        <div className="hero-content">
          <div className="card w-full max-w-md shadow-2xl bg-base-100 rounded-none">
            <div className="card-body">
              <ToastContainer />
              <h1 className="text-xl font-bold text-center font-serif">
                Please Signup
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label cursor-pointer font-serif">
                  <span className="label-text">Seller</span>
                  <input
                    value="seller"
                    type="radio"
                    name="radio-10"
                    {...register("role", {
                      required: true,
                    })}
                    className="radio checked:bg-red-500"
                    checked
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text font-serif">Buyer</span>
                  <input
                    value="buyer"
                    type="radio"
                    name="radio-10"
                    {...register("role", {
                      required: true,
                    })}
                    className="radio checked:bg-blue-500"
                    checked
                  />
                </label>
                <label className="label">
                  <span className="label-text font-serif">Your Name</span>
                </label>
                <input
                  className="input input-sm rounded-none input-accent"
                  {...register("yourname", { required: true })}
                  aria-invalid={errors.yourname ? "true" : "false"}
                />
                {errors.yourname?.type === "required" && (
                  <p className="text-sm text-red-800" role="alert">
                    Name is required
                  </p>
                )}
                <label className="label">
                  <span className="label-text font-serif">Your Email</span>
                </label>
                <input
                  className="input input-sm rounded-none input-accent"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-sm text-red-800" role="alert">
                    {errors.email?.message}
                  </p>
                )}
                <label className="label">
                  <span className="label-text font-serif">Your Password</span>
                </label>
                <input
                  className="input input-sm rounded-none input-accent"
                  {...register("password", {
                    required: "password is required",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-sm text-red-800" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                <span className="text-xs block mt-2">
                  Allready have an accoount?
                  <Link
                    to="/login"
                    className="link link-hover font-serif text-lime-800"
                  >
                    Login
                  </Link>
                </span>
                <input
                  type="submit"
                  value="Sign up"
                  className="input input-sm rounded-none input-accent font-serif bg-teal-700 block mx-auto mt-4 text-base font-bold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
