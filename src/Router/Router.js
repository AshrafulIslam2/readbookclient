import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AllProductsCatagorisWise from "../Pages/AllproductsCatagorisWies/AllProductsCatagorisWise";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/catagories/:id",
        element: <AllProductsCatagorisWise></AllProductsCatagorisWise>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/catagoris/${params.id}`),
      },
    ],
  },
]);
export default router;
