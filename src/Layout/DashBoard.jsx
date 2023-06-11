import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa'
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";



const DashBoard = () => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();


  return (

    <>
      <Helmet>
        <title>Sports Academi || Dashboard</title>
      </Helmet>


      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-black text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="space-y-3 menu p-4 w-80 h-full ">

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