import { useEffect, useState } from "react";
import PopulerInst from "../page/Home/PopulerIns/PopulerInst";



const Instructors = () => {
    const [populers, setPopulers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instractor')
            .then(res => res.json())
            .then(data => {
                setPopulers(data)
            })

    }, [])

    return (
        <div>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                populers.map(populer => <PopulerInst
                    key={populer.id}
                    item={populer}
                ></PopulerInst>)
            }
        </div>
        </div >
    );
};

export default Instructors;