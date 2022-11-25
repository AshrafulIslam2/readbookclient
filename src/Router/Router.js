import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AllProductsCatagorisWise from "../Pages/AllproductsCatagorisWies/AllProductsCatagorisWise";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../PrivetRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AllProductsCatagorisWise></AllProductsCatagorisWise>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/catagoris/${params.id}`),
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
