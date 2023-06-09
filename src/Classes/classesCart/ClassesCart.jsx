
import AOS from 'aos';

// ..
AOS.init();
const ClassesCart = ({ classCart }) => {
    const { sport, instructor, availableSeats, price, image } = classCart
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
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ClassesCart;