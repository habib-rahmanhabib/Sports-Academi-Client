
import { Rating } from '@smastrom/react-rating'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import '@smastrom/react-rating/style.css'
const PopulerInst = ({ item }) => {
    const { email, name, rating, sport, image, student } = item
    return (
        <div data-aos="fade-up" className=" p-8">
            <div className="mx-auto mb-3">
                <img className="h-56  w-56 mx-auto rounded-full" src={image} alt="" />
            </div>

            <div className=' sm:mx-auto'>
                <p > <span className="font-semibold">Name:</span> {name}</p>
                <p> <span className="font-semibold">Email:</span> {email}</p>
                <p> <span className="font-semibold">Sport:</span> {sport}</p>
                <p><span className="font-semibold">Student:</span> {student}</p>
                <Rating
                    style={{ maxWidth: 150 }}
                    value={rating}
                    readOnly
                />
            </div>

        </div>
    );
};

export default PopulerInst;