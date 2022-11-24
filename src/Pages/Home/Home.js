import React from "react";
import HommeBanner from "./HomeBanner/HommeBanner";
import PopularProduct from "./PopularProducts/PopularProduct";

const Home = () => {
  return (
    <div className="max-w-[1040px] mx-auto ">
      <HommeBanner></HommeBanner>
      <PopularProduct></PopularProduct>
    </div>
  );
};

export default Home;
