import { useEffect, useState } from "react";


const useInstructor = () => {

    const [populers, setPopulers] = useState([])
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/instractor')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setPopulers(data)
            })

    }, [])
    return [populers,loading ]
};

export default useInstructor;