import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC } from "react";
import axios from "axios";

import Register from "@/pages/auth/Register";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/auth/Login";
import Profile from "@/pages/Profile";
import Home from "@/pages";

axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/devanada/hells-kitchen/1.1.0";

const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile/:username", // <~ path param
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
