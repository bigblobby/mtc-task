import React from 'react';
import KitchenImage from '../../images/kitchen-1.png';
import { Carousel } from 'react-responsive-carousel';

class HeroCarousel extends React.Component {
    render() {
        return (
            <div className="hero-carousel">

                <div className="hero-carousel__overlay-content">
                    <p className="hero-carousel__sub-title">Design and order your new kitchen online today</p>
                    <h1 className="hero-carousel__title">Bespoke & made to measure handmade kitchen design</h1>
                    <div>
                        <a className="btn btn-primary" href="/">Order now</a>
                    </div>
                </div>

                <Carousel showThumbs={false} showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true} transitionTime={2000} interval={6000}>
                    {
                        [...Array(3)].map((image, i) => {
                            return (
                                <div key={i}>
                                    <img className="hero-carousel__image" src={KitchenImage} alt="Kitchen"/>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

export default HeroCarousel;
