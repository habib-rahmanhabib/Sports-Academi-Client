import { useEffect, useState } from "react";
import ClassesCart from "./classesCart/ClassesCart";


const Classes = () => {
    const [classes, setClasses]= useState([])
    
    useEffect(()=>{
      fetch('class.json')
      .then(res=>res.json())
      .then(data=>{
        setClasses(data)
      })
    },[])

    return (
        <>
            
            <div>
                {
                    classes.map( classCart =><ClassesCart
                        key={classCart.id}
                        classCart={classCart}
                        ></ClassesCart>)
                }
            </div>

        </>
    );
};

export default Classes;