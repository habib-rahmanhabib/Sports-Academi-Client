import { FaTrashAlt } from "react-icons/fa";
import useEnroll from "../../hooks/useEnroll";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const SelectedClass = () => {

    const [cart, refetch] = useEnroll()
    console.log(cart)

    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const amount = total.toFixed(2)


    const handleDelete = (item) => {
        console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/enroll/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )

                        }
                    })

            }
        })


    }


    return (
        <>


            <div className="flex uppercase font-semibold justify-evenly items-center gap-4 mb-2">
                <h3 className="text-2xl">Total Class: <span className="text-red-500">{cart.length}</span></h3>
                <h3 className="text-2xl">Total Price: <span className="text-red-500">${amount}</span></h3>


                <Link to='/dashboard/payments' >
                    <button className="btn border-0 btn-primary ">Pay Now</button>
                </Link>

            </div>


            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Sports Image</th>
                            <th>Sports Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr
                                key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.sport}</td>
                                <td>{item.instructor}</td>
                                <td className="">${item.price}
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn bg-red-500 text-white border-0 "
                                    >
                                        <FaTrashAlt></FaTrashAlt>{" "}
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>




                </table>
            </div>

        </>
    );
};

export default SelectedClass;