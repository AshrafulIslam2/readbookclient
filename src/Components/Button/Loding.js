import React from "react";

const Loding = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-black"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-black"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-black"></div>
    </div>
  );
};

export default Loding;
