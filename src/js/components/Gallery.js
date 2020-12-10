import React from 'react';
import gallery1 from '../../images/gallery/gallery-1.jpg';
import gallery2 from '../../images/gallery/gallery-2.jpg';
import gallery3 from '../../images/gallery/gallery-3.jpg';
import gallery4 from '../../images/gallery/gallery-4.jpg';
import Container from "../layout/Container";
import Modal from "./Modal";

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeImage: null,
            modalOpen: false
        }
    }

    openGallery = (image) => {
        this.setState({
            activeImage: image,
            modalOpen: true
        });
    }

    closeGallery = () => {
        this.setState({
            activeImage: null,
            modalOpen: false
        });
    }

    render() {
        return (
            <div className="gallery">
                <Container mw={1300}>
                    <h2 className="gallery__title">Customer Gallery</h2>

                    <div className="row no-gutters mr-n3">
                        <div className="col-12 col-sm-6 col-lg-3 mb-3">
                            <div className="gallery__thumb">
                                <img src={gallery1} alt="Kitchen one" onClick={() => this.openGallery(gallery1)}/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-3">
                            <div className="gallery__thumb">
                                <img src={gallery2} alt="Kitchen two" onClick={() => this.openGallery(gallery2)}/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-3">
                            <div className="gallery__thumb">
                                <img src={gallery3} alt="Kitchen three" onClick={() => this.openGallery(gallery3)}/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-3">
                            <div className="gallery__thumb">
                                <img src={gallery4} alt="Kitchen four" onClick={() => this.openGallery(gallery4)}/>
                            </div>
                        </div>
                    </div>

                    {
                        this.state.modalOpen && (
                            <Modal close={this.closeGallery}>
                                <div className="gallery__image">
                                    <img src={this.state.activeImage} alt="Kitchen"/>
                                </div>
                            </Modal>
                        )
                    }

                    <div className="text-center mt-4">
                        <a className="btn btn-primary" href="/">View More</a>
                    </div>

                </Container>
            </div>
        );
    }
}

export default Gallery;
