
import { Helmet } from 'react-helmet-async';
import useMyEnroll from '../../hooks/useMyEnroll';


const PaymentHistory = () => {
    const [myEnroll] = useMyEnroll('')
    console.log(myEnroll)
    return (
        <div className="w-full pb-[700px]   ">
        <Helmet>
          <title>Sports Academi | Dashboard | Payment-History</title>
        </Helmet>
        
  
        <div data-aos="fade-up" className="overflow-x-auto mt-5  w-full">
            <h2 className='text-center text-3xl font-bold text-sky-500 pb-10'>Total Payment: <span className='text-red-500'>{myEnroll.length} times</span></h2>
          <table 
           className="table w-full">
            {/* head */}
            <thead>
              <tr className=" text-xl">
                <th>#</th>
                <th>Payment Email</th>
                <th>Payment Date</th>
                <th>Transaction id</th>
                <th>Total Amount</th>
               
              </tr>
            </thead>
            <tbody className='text-xs text-black'>
              {myEnroll.map((item, index) => (
                <tr  
                 key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                   {item.email}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.transactionId}</td>
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

export default PaymentHistory;