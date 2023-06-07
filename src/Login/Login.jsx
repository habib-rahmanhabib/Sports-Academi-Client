import { Link } from "react-router-dom";

const Login = () => {
 const loginFromHandler=event=>{
  
    event.preventDefault()
    const form= event.target;
    const email = form.email.value;
    const  password= form.password.value;
    console.log(email,password)
    

 }


    return (

        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <form onSubmit={loginFromHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <input className="btn btn-primary" disabled={false} type="submit" name="Submit" id="" value='Login' />
                                <p>Have no account your please <Link to='/signup' className="text-lime-400">SignUp</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;