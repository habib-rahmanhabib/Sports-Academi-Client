

const ClassesCart = ({ classCart }) => {
    const { sport, instructor, availableSeats, price, image } = classCart
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
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