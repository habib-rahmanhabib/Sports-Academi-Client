
import Banner from '../Banner/Banner';
import PopulerInst from '../PopulerIns/PopulerInst';
import { Helmet } from 'react-helmet-async';

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import useInstructor from '../../../hooks/useInstructor';
import useClass from '../../../hooks/useClass';
import ClassesCart from '../../../Classes/classesCart/ClassesCart';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    const [populers] = useInstructor()
    const [classes] = useClass()

    // type writing
    const [text] = useTypewriter({
        words: ['Best instractor', 'Most Populer'],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [write] = useTypewriter({
        words: ['Populer class'],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })


    return (
        <div>
            <Helmet>
                <title>Sports Academi || Home</title>
            </Helmet>
            <Banner></Banner>

            {/* instructor section */}

            <div className="divider m-6">
                <div className='text-center'>
                    <span className='text-3xl font-bold text-lime-300'><span className='text-black' >Instractor: </span>{text}</span>
                    <Cursor cursorColor='red' />
                </div>


            </div>



            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    populers.slice(0, 6).map(populer => <PopulerInst
                        key={populer.id}
                        item={populer}
                    ></PopulerInst>)
                }
            </div>

            {/* extra section */}
            
            <ExtraSection></ExtraSection>


            {/* class section added */}

            <div className='divider my-6'>
                <div className='App'>
                    <h3 className='text-3xl font-bold'> Class:  <span className='text-blue-800'>{write}</span></h3>
                    <Cursor cursorColor='green' />
                </div>


            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes.slice(0, 6).map(classCart => <ClassesCart
                        key={classCart.id}
                        classCart={classCart}
                    ></ClassesCart>)
                }
            </div>


        </div>
    );
};

export default Home;