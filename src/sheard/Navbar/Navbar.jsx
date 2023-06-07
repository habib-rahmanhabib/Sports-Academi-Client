import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Navbar = () => {

    const item = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link >Instructors</Link></li>
        <li><Link>Classes</Link></li>
        <li><Link> Dashboard</Link></li>
    </>

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
                alert("Logout successful")
            });
    }



    return (
        <>
            <div className="navbar bg-slate-300 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {item}
                        </ul>
                    </div>
                    <p className="btn btn-ghost normal-case text-xl"> <img className="w-[50px] bg-slate-200 " src="https://media.istockphoto.com/id/1409980938/photo/3d-hand-holding-trophy-cup-business-success-concept-1st-place-award-character-with-gold.jpg?s=612x612&w=0&k=20&c=4xlgOqAbIqGezhu_A7YmdtEQBx5hYrAT4JgbjXWwI2E=" /> Sports-Academi</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {item}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <Link onClick={handleLogout} className="btn bg-purple-900">Logout</Link> :
                        <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;