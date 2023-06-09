

const ClassesCart = ({ classCart }) => {
    const { sport, instructor, availableSeats, price, image } = classCart
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl p-4">
                <figure><img className="h-56 w-full" src={image} alt="Shoes" /></figure>
                <div className="p-0">
                   <p>{sport}</p>
                   <p>{instructor}</p>
                   <p>{availableSeats}</p>
                   <p>{price}</p>
                   <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ClassesCart;