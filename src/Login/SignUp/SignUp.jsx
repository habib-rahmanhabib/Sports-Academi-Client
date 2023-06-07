import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
           

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-teal-800 text-white">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">signup</button>
                            <p>you have a account go <Link to='/login' className="text-lime-400">Login</Link></p>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default SignUp;