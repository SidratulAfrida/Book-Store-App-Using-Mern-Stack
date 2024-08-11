import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import Home from '../home/Home.jsx';
import Shop from '../shop/Shop.jsx';
//import About from '../components/About.jsx';
//import Blog from '../components/Blog.jsx';
import SingleBook from "../shop/SingleBook.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";
import Users from "../dashboard/Users.jsx";
import Products from "../dashboard/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
     
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => 
          fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  },
  {
    path: "/sign-up",
    element: <Signup /> // Separate route without the App layout
  },
  {
    path: "/login",
    element: <Login /> // Separate route without the App layout
  },
  {
    path: "/logout",
    element: <Logout /> // Separate route without the App layout
  },
  {
    path: "/admin/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />
      },
      {
        path: "/admin/dashboard/users",
        element: <Users />
      },
      {
        path: "/admin/dashboard/products",
        element: <Products />
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) => 
          fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  }
]);

export default router;
