import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Errorpage/ErrorPage";
import Home from "../page/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp/SignUp";
import Instructors from "../Instructors/Instructors";
import Classes from "../Classes/Classes";
import DashBoard from "../Layout/DashBoard";
import SelectedClass from "../Dasboard/SelectedClass/SelectedClass";


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
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'instructors',
        element:<Instructors></Instructors>
      },
      {
        path:'/classes',
        element:<Classes></Classes>
      }
    ]
    },
    {
      path:'dashboard',
      element:<DashBoard></DashBoard>,

      children:[
        {
           path:'selectedclass',
           element:<SelectedClass></SelectedClass>
        }
      ]
    }

  ]);