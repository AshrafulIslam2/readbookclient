import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { authcontext } from "../../AuthoContext/AuthContextProvider";
import Loding from "../../Components/Button/Loding";
import getCatagories from "../../hooks/UseCatagories";
import BookingModal from "../Modal/BookingModal";
import ShowCatagorisHome from "./CatagoryForHome/ShowCatagorisHome";
import HommeBanner from "./HomeBanner/HommeBanner";
import PopularProduct from "./PopularProducts/PopularProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Addproducts from "./Addproducts/Addproducts";

const Home = () => {
  const [signalProdutcs, SetsignalProdutcs] = useState(null);
  const { user } = useContext(authcontext);
  console.log(user);
  const {
    data: catagories = [],
    isLoading,
    refetch,
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
      <Addproducts></Addproducts>
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
      <ToastContainer />
    </div>
  );
};

export default Home;
