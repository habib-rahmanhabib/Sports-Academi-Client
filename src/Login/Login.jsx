import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [show, setShow] = useState(false)
    const handlePasswordShow =()=>{
        setShow(!show)
    }



    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    title: 'Login Successfull',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })

    }


    console.log(errors);
    return (
        <div>
            <Helmet>
                <title>sport Expressions | Login</title>
            </Helmet>
            <div className=" mt-11" data-aos="fade-up" >
                <div className="  w-10/12 md:w-4/12 lg:w-5/12 mx-auto  ">
                    <div className="card  w-full  shadow-2xl bg-green-900">
                        <h2 className="text-center pt-5 text-3xl text-white ">
                            Please Login
                        </h2>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        {...register("email", { required: true, maxLength: 80 })}
                                        className="input input-bordered text-black"
                                    />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input
                                        type={show? "text" : "password"}
                                        placeholder="password"
                                        {...register("password", { required: true, maxLength: 80 })}
                                        className="input input-bordered text-black"
                                    />
                                    <span onClick={handlePasswordShow} className="absolute cursor-pointer text-orange-500 font-semibold top-12 right-5">
                                        {show? "Hide" : "Show"}
                                    </span>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        value="Login"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
                            <p className="mt-3 text-white">Didn't have an acccout?  <Link to='/signup'> <span className="text-red-500" >Signup</span></Link> </p>
                            <div className="divider text-white">OR</div>
                          <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
