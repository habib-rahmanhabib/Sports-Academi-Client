import React, { useContext, useState, } from 'react';


import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('')


    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            toast.error('please type atleast 6 cheracter!')
        }

        // console.log(email, password)




        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                toast.success('Successfully login!')
                setError('')
            })
            .catch(error => {
                setError('no match email and password')
            })
    }
    const handleGoogleSignIn = () => {
        googleLogin()

    }
    const handleEmailSignIn = () => {
        emailLogin()
    }

    return (
        <>
          <Helmet>
            <title>Sports Academi || Login</title>
          </Helmet>
            <div className='container mx-auto bg-blue-900 rounded-lg py-2'>
                <h3 className=' w-80 py-2 mt-2 mx-auto text-purple-100 font-bold text-lg rounded-lg bg-purple-900 text-center'>Please Login</h3>
                <div className=' m-4 bg-white shadow'>
                    <form onSubmit={handleLogin} className="form-control w-full max-w-xs mx-auto">

                        <label className="label">
                            <span className="label-text font-bold">What is your Email ?</span>

                        </label>
                        <input type="email" name='email' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            <span className="label-text font-bold">What is your Password?</span>

                        </label>
                        <input type="password" name='password' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />
                        <p className='text-warning'>{error}</p>

                        <button className='btn btn-accent mt-2' type='submit'>Login</button>

                        <p>Don't have an account <span> <Link className='link link-primary' to="/signup">Registration</Link></span></p>

                        <div>
                            <p onClick={handleGoogleSignIn} className='btn btn-error w-80 py-2 mt-2 mx-auto text-center'>
                                Google
                            </p>
                            <p onClick={handleEmailSignIn} className='btn bg-green-200 w-80 py-2 mt-2 mx-auto text-center'>

                                Email
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Login;