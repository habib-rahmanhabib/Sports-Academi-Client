import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Errorpage/ErrorPage";
import Home from "../page/Home/Home/Home";
import Login from "../Login/Login";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,

      children:[{
          path: '/',
          element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      }
    ]
    },

  ]);