
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import PopulerInst from '../PopulerIns/PopulerInst';

const Home = () => {
  const [populers, setPopulers]=useState([])

  useEffect(()=>{
    fetch('populer.json')
    .then(res=>res.json())
    .then(data=>{
        setPopulers(data)
    })

  },[])

    return (
        <div>
            <Banner></Banner>

            <div>
                {
                    populers.map(populer=><PopulerInst
                    key={populer.id}
                    item={populer}
                    ></PopulerInst>)
                }
            </div>
        </div>
    );
};

export default Home;