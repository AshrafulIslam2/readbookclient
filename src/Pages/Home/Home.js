import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loding from "../../Components/Button/Loding";
import getCatagories from "../../hooks/UseCatagories";
import ShowCatagorisHome from "./CatagoryForHome/ShowCatagorisHome";
import HommeBanner from "./HomeBanner/HommeBanner";
import PopularProduct from "./PopularProducts/PopularProduct";

const Home = () => {
  const {
    data: catagories = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["catagoris"],
    queryFn: getCatagories,
  });
  if (isLoading) {
    return <Loding></Loding>;
  }
  return (
    <div className="max-w-[1040px] mx-auto ">
      <HommeBanner></HommeBanner>
      <PopularProduct></PopularProduct>
      {catagories.map((catagory) => (
        <ShowCatagorisHome
          key={catagory._id}
          catagory={catagory}
        ></ShowCatagorisHome>
      ))}
    </div>
  );
};

export default Home;
