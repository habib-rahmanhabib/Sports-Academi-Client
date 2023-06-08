
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import PopulerInst from '../PopulerIns/PopulerInst';
import { Helmet } from 'react-helmet-async';

import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const [populers, setPopulers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instractor')
            .then(res => res.json())
            .then(data => {
                setPopulers(data)
            })

    }, [])

    // type writing
    const [text] = useTypewriter({
        words: ['Best instractor'],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })


    return (
        <div>
            <Helmet>
                <title>Sports Academi || Home</title>
            </Helmet>
            <Banner></Banner>

            <div className='text-center'>
                <span className='text-3xl font-bold text-lime-300'><span className='text-black' >Instractor: </span>{text}</span>
                <Cursor cursorColor='red' />
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    populers.slice(0, 6).map(populer => <PopulerInst
                        key={populer.id}
                        item={populer}
                    ></PopulerInst>)
                }
            </div>
        </div>
    );
};

export default Home;