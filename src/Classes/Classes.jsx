
import ClassesCart from "./classesCart/ClassesCart";

import useClass from "../hooks/useClass";


const Classes = () => {
  const [classes]=useClass()

    return (
        <>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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