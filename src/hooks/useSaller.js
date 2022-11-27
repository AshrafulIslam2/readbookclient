import axios from "axios";
import { useState } from "react";
const useSeller = (email) => {
  const [isSeller, SetSeller] = useState("");
  const [Buyerloading, SetBuyerloading] = useState(true);
  axios.get(`http://localhost:4000/user/seller/${email}`).then((data) => {
    if (data.data.isSeller) {
      SetSeller(data.data.isSeller);
      SetBuyerloading(false);
    }
  });
  return [isSeller, Buyerloading];
};

export default useSeller;
