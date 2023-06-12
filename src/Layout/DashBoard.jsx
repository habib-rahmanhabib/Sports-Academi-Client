import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa'
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructors from "../hooks/useInstructors";




const DashBoard = () => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructors();


  return (

    <>
      <Helmet>
        <title>Sports Academi || Dashboard</title>
      </Helmet>


      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button absolute top-0 right-5   lg:hidden"
          >
          <img className="w-5 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
  
          </label>
          
        </div>
        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay">
          </label>

          <ul className="space-y-3 menu p-4 w-80 h-full bg-black  bg-opacity-80 text-white ">

            {/* Sidebar content here */}


        {
          isAdmin ?
          (
            <>
            <li><NavLink to='/'><FaHome></FaHome>Admin Home</NavLink></li>
          <li><NavLink to='/dashboard/all-users'><FaWallet></FaWallet>All Users</NavLink></li>
          </>
          )
          :
          isInstructor ?
        (
          <>
          <li><NavLink to='/'><FaHome></FaHome>Instructor Home</NavLink></li>
          <li><NavLink to='/dashboard/add-class-page'><FaWallet></FaWallet>Add Class</NavLink></li>
          <li><NavLink to='/dashboard/my-class'><FaShoppingCart></FaShoppingCart>  
          My Class          
            </NavLink></li>

          </>
            
        )
          :
          (
            <>
            <li><NavLink to='/'><FaHome></FaHome>User Home</NavLink></li>
            <li><NavLink to='/dashboard/selectedclass'><FaShoppingCart></FaShoppingCart>
              My Selected Class <div className="badge badge-secondary"></div>
            </NavLink></li>
            <li><NavLink to='/dashboard/my-enroll-class'><FaShoppingCart></FaShoppingCart>
              My Enrollmet class <div className="badge badge-secondary"></div>
            </NavLink></li>
            <li><NavLink to='/dashboard/payment-history'><FaWallet></FaWallet> Payment History</NavLink></li>
          
          </>
          )
        }

      
          </ul>

        </div>
      </div>

    </>


  );
};

export default DashBoard;