import { useEffect, useState } from "react";


const useInstructor = () => {

    const [populers, setPopulers] = useState([])
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        fetch('https://y-nine-topaz.vercel.app/instractor')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setPopulers(data)
            })

    }, [])
    return [populers,loading ]
};

export default useInstructor;