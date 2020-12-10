import React from 'react';
import Navigation from "../components/Navigation";
import HeroCarousel from "../components/HeroCarousel";
import SplitDriver from "../components/SplitDriver";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import SplitDriverImage from '../../images/kitchen-2.png'

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolling: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.pageYOffset > 0) {
            this.setState({isScrolling: true});
        } else {
            this.setState({isScrolling: false});
        }
    }

    render() {
        return (
            <div>
                <Navigation isScrolling={this.state.isScrolling} />
                <HeroCarousel />
                <SplitDriver
                    title={'Discover the beauty of a handmade kitchen'}
                    subTitle={'Quality Craftmanship from build to delivery'}
                    copy={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.'}
                    image={SplitDriverImage}
                    linkUrl={'/'}
                    linkText={'About Us'}
                />

                <Reviews
                    slides={[
                        {
                            content: 'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
                            author: 'Jane, Dundee'
                        },
                        {
                            content: 'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
                            author: 'James, Dundee'
                        },
                        {
                            content: 'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
                            author: 'Jim, Dundee'
                        }
                    ]}
                />
                <Gallery />
                <Footer />
            </div>
        );
    }
}

export default Homepage;
