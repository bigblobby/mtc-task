import React from 'react';
import Container from "../layout/Container";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon";
import { ChevronRightIcon} from "../icons/ChevronRightIcon";

class Reviews extends React.Component {
    static defaultProps = {
        slides: []
    }

    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 1,
        }
    }

    next = () => {
        this.setState((prevState) => {
            const slides = this.props.slides;
            let index = prevState.activeSlide + 1;

            if(prevState.activeSlide === slides.length){
                index = 1
            }

            return {
                activeSlide: index
            }
        });
    };

    prev = () => {
        this.setState((prevState) => {
            const slides = this.props.slides;
            let index = prevState.activeSlide - 1;

            if(prevState.activeSlide === 1){
                index = slides.length;
            }

            return {
                activeSlide: index
            }

        });
    };


    render() {
        return (
            <div className="reviews">
                <Container mw={1300}>
                    <div className="reviews__inner">
                        <p className="reviews__sub-title">What Our Customers Say</p>
                        <h2 className="reviews__title">Over 35 years experience designing handmade kitchens</h2>

                        <button className="reviews__carousel-prev-button" onClick={this.prev}><ChevronLeftIcon /></button>
                        <button className="reviews__carousel-next-button" onClick={this.next}><ChevronRightIcon /></button>

                        <div className="reviews__carousel">
                            <Carousel
                                showIndicators={false}
                                showStatus={false}
                                showArrows={false}
                                showThumbs={false}
                                infiniteLoop={true}
                                selectedItem={this.state.activeSlide}
                            >
                                {
                                    this.props.slides.length > 0 && this.props.slides.map((slide, i) => {
                                        return (
                                            <div key={i} className="reviews__carousel-slide">
                                                <p>{slide.content}</p>
                                                <p>{slide.author}</p>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>

                        <div className="text-center mt-3">
                            <a className="btn btn-primary" href="/">
                                <span className="d-none d-sm-inline">Frequently Asked Questions</span>
                                <span className="d-inline d-sm-none">Faqs</span>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Reviews;
