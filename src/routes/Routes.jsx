import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import CategoryPage from "../pages/CategoryPage";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/Login";

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
      path: "/auth",
      element: <Authlayout></Authlayout>,
      children:[
        {
          path:"/auth/login",
          element:<Login></Login>,
        },
        {
          path:"/auth/register",
          element:<h2>register</h2>,
        }
      ]
    },
    {
      path: "*",
      element: <div>Hello ! Path not found</div>,
    },

  ]);