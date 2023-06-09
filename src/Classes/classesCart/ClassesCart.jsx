
import AOS from 'aos';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

// ..
AOS.init();
const ClassesCart = ({ classCart }) => {
    const { sport, instructor, availableSeats, price, image, _id } = classCart
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleEnroll = ()=>{
        if(user && user.email){
            const enrollData = {enrollId: _id, sport, image,instructor, price, availableSeats, email: user.email }
            fetch('http://localhost:5000/all-enroll', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(enrollData)
            })
            .then( res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your class is added on selected page',
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
       
        }
        else{
            Swal.fire({
                title: "Are you want to login?",
                text: "For enroll you have to login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login", {state: {from: location}});
                }
              });
        }
        
    
    }

    return (
        <>
            <div data-aos="fade-up" data-aos-duration="3000" className="card card-compact bg-base-100 shadow-xl p-4">
                <figure><img className="h-56 w-full" src={image} alt="Shoes" /></figure>
                <div className="p-0 mt-4">
                   <p> <span className="text-green-800 font-bold">Sports Name:</span> {sport}</p>
                   <p> <span className="text-green-800 font-bold">Instructor name:</span> {instructor}</p>
                   <p> <span className="text-green-800 font-bold">Avaolablesets: </span> {availableSeats}</p>
                   <p> <span className="text-green-800 font-bold">Course Cost:</span> ${price}</p>
                   
                    <div className="card-actions justify-end">
                        <button  onClick={()=> handleEnroll(classCart )}
                         className="btn btn-primary">Enrole Now</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ClassesCart;