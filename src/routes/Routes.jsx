import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
    },
    {
      path: "/news",
      element: <div>Hello News!</div>,
    },
    {
      path: "/logIn",
      element: <div>Hello LogIn!</div>,
    },
    {
      path: "*",
      element: <div>Hello ! Path not found</div>,
    },

  ]);