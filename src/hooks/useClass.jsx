import { useEffect, useState } from "react";




const useClass = () => {

    const [classes, setClasses]= useState([])
    const [loading, setLoading]=useState(true)
    
    useEffect(()=>{
      fetch('class.json')
      .then(res=>res.json())
      .then(data=>{
        setLoading(false)
        setClasses(data)
      })
    },[])
    return [classes,loading]
};

export default useClass;