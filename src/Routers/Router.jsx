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
import Payment from "../Dasboard/Payment/Payment";
import MyEnrollClass from "../Dasboard/MyEnrollClass/MyEnrollClass";
import PaymentHistory from "../Dasboard/PaymentHistory/PaymentHistory";
import AllUsers from "../Dasboard/allusers/AllUsers";
import AdminRoute from "./AdminRouter";
import AddClass from "../Dasboard/addclass/AddClass";
import MyClasses from "../Dasboard/Myclass/MyClasses";


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
        },
        {
          path:'payments',
          element:<Payment></Payment>
        },
        {
          path:'my-enroll-class',
          element:<MyEnrollClass></MyEnrollClass>
        },
        {
          path:'payment-history',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'all-users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'add-class-page',
          element:<AddClass></AddClass>
        },
        {
          path:'my-class',
          element:<MyClasses></MyClasses>
        }
      ]
    }

  ]);

