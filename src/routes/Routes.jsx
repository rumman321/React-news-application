import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import CategoryPage from "../pages/CategoryPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
      children:[
        {
          path:"",
          element:<Navigate to={"/category/01"}></Navigate>
        },
        {
          path:"/category/:id",
          element:<CategoryPage></CategoryPage>,
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
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