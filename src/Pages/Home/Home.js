import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loding from "../../Components/Button/Loding";
import getCatagories from "../../hooks/UseCatagories";
import BookingModal from "../Modal/BookingModal";
import ShowCatagorisHome from "./CatagoryForHome/ShowCatagorisHome";
import HommeBanner from "./HomeBanner/HommeBanner";
import PopularProduct from "./PopularProducts/PopularProduct";

const Home = () => {
  const [signalProdutcs, SetsignalProdutcs] = useState(null);
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
  refetch();
  console.log(signalProdutcs);
  return (
    <div className="max-w-[1040px] mx-auto ">
      <HommeBanner></HommeBanner>
      <PopularProduct></PopularProduct>
      {catagories.map((catagory) => (
        <ShowCatagorisHome
          key={catagory._id}
          catagory={catagory}
          SetsignalProdutcs={SetsignalProdutcs}
        ></ShowCatagorisHome>
      ))}
      {signalProdutcs && (
        <BookingModal signalProdutcs={signalProdutcs}></BookingModal>
      )}
    </div>
  );
};

export default Home;
