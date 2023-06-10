import { useEffect, useState } from "react";
import PopulerInst from "../page/Home/PopulerIns/PopulerInst";
import useInstructor from "../hooks/useInstructor";
import { Helmet } from "react-helmet-async";



const Instructors = () => {
    const [populers] = useInstructor()

    return (
        <div>

            <Helmet>
                <title>Sports Academi || Instructor</title>
            </Helmet>


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