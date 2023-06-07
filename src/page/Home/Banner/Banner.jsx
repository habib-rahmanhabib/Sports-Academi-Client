import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>
            <Carousel className='text-center'>
                <div>
                    <img src="https://media.istockphoto.com/id/1183940092/photo/footballer-dribbling-ball-on-training-between-orange-cones-young-football-player-in-sports.webp?b=1&s=170667a&w=0&k=20&c=Ml9tjfK4Mc9Ur0hO2ivh8DUcBZFfBW-fxZiROLymR-M=" />
                    
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1355086328/photo/american-football-championship-teams-ready-professional-players-aggressive-face-off-ready-for.webp?b=1&s=170667a&w=0&k=20&c=oppcugL5if8KL9citBpZoSIlGL5bvzxxiKYOnA-WvRs=" />
                  
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1201438254/photo/basketball-arena.webp?b=1&s=170667a&w=0&k=20&c=rddJQ4oakpWkZf0sO60eA7eJ0qK3LWBliPUn4d3OR4g=" />
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1294407182/photo/playing-field.webp?b=1&s=170667a&w=0&k=20&c=UqobgP0B9PnhDYKCXOnl0JRfU5Grow-ZwpprUoTTc2s=" />
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/695604058/photo/many-activities.webp?b=1&s=170667a&w=0&k=20&c=gdtwA-Mw5n4W7tUM8TcuwHHu-QNHMwuwiBQIyM1RgrI=" />
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/904094442/photo/kids-preparing-for-track-run-race.webp?b=1&s=170667a&w=0&k=20&c=-aad2-_rn_YpTiXLhuyEBMPGq9Jcm2akBbDbmfXfYWo=" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;