import { createBrowserRouter } from "react-router-dom";
import AdminPrivetRoute from "../AdminPrivetRoute/AdminPrivetRoute";
import DashboardLayout from "../Layout/Main/Dashboard/DashboardLayout";
import Main from "../Layout/Main/Main";
import AllProductsCatagorisWise from "../Pages/AllproductsCatagorisWies/AllProductsCatagorisWise";
import Blog from "../Pages/Blog/Blog";
import Addsellerproducts from "../Pages/Dashboard/Addsellerproducts";
import AllmyProducts from "../Pages/Dashboard/AllmyProducts";
import Alluser from "../Pages/Dashboard/Alluser";
import Mybooking from "../Pages/Dashboard/Mybooking";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
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
          fetch(`https://y-tan-one.vercel.app/catagoris/${params.id}`),
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Mybooking></Mybooking>,
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminPrivetRoute>
            <Alluser></Alluser>
          </AdminPrivetRoute>
        ),
      },
      {
        path: "/dashboard/seller",
        element: <AllmyProducts></AllmyProducts>,
      },
      {
        path: "/dashboard/seller/add",
        element: <Addsellerproducts></Addsellerproducts>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
