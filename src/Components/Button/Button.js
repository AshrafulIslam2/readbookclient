import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn text-bold  hover:bg-teal-700">{children}</button>
  );
};

export default Button;
