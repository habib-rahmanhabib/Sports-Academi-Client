import React from 'react';

import useMyEnroll from '../../hooks/useMyEnroll';
import { Helmet } from 'react-helmet-async';



const MyEnrollClass = () => {

    const [myEnroll] = useMyEnroll('')
    // console.log(myEnroll)
  
 





    return (
        <div className="w-full pb-[700px] ">
        <Helmet>
          <title>Sports Academi | Dashboard | My-Enroll-Class</title>
        </Helmet>
        
  
        <div data-aos="fade-up" className="overflow-x-auto mt-5  w-full">
            <h2 className='text-center text-3xl font-bold text-sky-500 pb-10'>My All Enroll Class: <span className='text-red-500'>{myEnroll.length}</span></h2>
          <table 
           className="table w-full">
            {/* head */}
            <thead>
              <tr className=" text-xl">
                <th>#</th>
                <th>My Email</th>
                <th>Class Quantity</th>
                <th>Price</th>
               
              </tr>
            </thead>
            <tbody>
              {myEnroll.map((item, index) => (
                <tr  
                 key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                   {item.email}
                  </td>
                  <td>{item.quantity}</td>
                  <td className="">{item.price}$
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyEnrollClass;