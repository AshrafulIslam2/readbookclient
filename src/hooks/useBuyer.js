import axios from "axios";
import { useState } from "react";
const useBuyer = (email) => {
  const [isBuyer, SetIsBuyer] = useState("");
  const [Buyerloading, SetBuyerloading] = useState(true);
  axios.get(`https://y-tan-one.vercel.app/user/buyer/${email}`).then((data) => {
    console.log(data.data.isABuyer);
    if (data.data.isABuyer) {
      SetIsBuyer(data.data.isABuyer);
      SetBuyerloading(false);
    }
  });
  return [isBuyer, Buyerloading];
};

export default useBuyer;
