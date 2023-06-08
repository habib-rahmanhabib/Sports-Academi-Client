
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Academi || ErrorPage</title>
            </Helmet>
            <section className='flex items-center h-screen p-16 bg-purple-100 text-purple-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <div className='rounded-lg'>
                        <img className='rounded-full w-[50%] mx-auto' src='https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1686083667~exp=1686084267~hmac=bd42004aa5ee9f45b57c1c87249823b2de8ce51f964dfceb84f53dacd2c32e37' alt="" />
                    </div>
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8 font-extrabold text-9xl text-purple-600'>
                            <span className='sr-only'>Error </span>
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl mb-8'>
                            you are at wrong place!!!
                        </p>
                        <Link
                            to='/'
                            className='px-8 py-3 font-semibold rounded bg-purple-500 text-purple-900'
                        >
                            Go Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;