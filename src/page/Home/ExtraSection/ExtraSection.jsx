import AOS from 'aos';

// ..
AOS.init();

const ExtraSection = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-4 w-full items-center justify-center ">

                <div  data-aos="fade-right" className="  p-8">
                    <img src="https://media.istockphoto.com/id/617866436/photo/stadium-light-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=yGH80wne9uaKC6ArAxXVTxr4Q3yIs23Y1oJQJ7C3jc0=" alt="" />
                </div>
                <div  data-aos="fade-left" className=" text-center p-7">
                   <p className='bold'><span className='text-purple-600 bold'>Cricket:</span>  Cricket is a very importent for exarsise and it is very populer to exarcise  </p>
                   <p className='bold'><span className='text-purple-600 bold'>Soccer:</span>  Regular weight-bearing exercises, such as running and jumping in soccer, help increase bone density, reducing the risk of osteoporosis .  </p>
                   <p className='bold'><span className='text-purple-600 bold'>Basketball:</span> Basketball is a fast-paced sport that involves running, jumping, and constant movement. This aerobic activity helps improve cardiovascular.</p>
                   <p className='bold'><span className='text-purple-600 bold'>Badminton :</span>  Badminton is a fast-paced sport that requires constant movement,  The aerobic nature of the game helps improve cardiovascular fitness . </p>

                </div>

            </div>
        </>
    );
};

export default ExtraSection;