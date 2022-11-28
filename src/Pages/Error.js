import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex   flex-col justify-center items-center h-screen ">
      <h1 className="text-6xl font-bold">Erorr 404</h1>
      <Link to="/" className="link link-hover">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
