import React from 'react';
import Logo from "../../images/logo.svg";
import Container from "../layout/Container";
import { FacebookIcon } from "../icons/FacebookIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Container mw={1300}>
                    <div className="footer__top">
                        <div className="footer__logo">
                            <a href="/">
                                <img src={Logo} alt=""/>
                            </a>
                        </div>
                    </div>
                </Container>
                <Container mw={1000}>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <h3 className="footer__section-title">About</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Shop</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Plan my kitchen</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="/">About us</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Gallery</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <h3 className="footer__section-title">Services</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Faq</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Contact</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="/">How to buy</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Downloads</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <h3 className="footer__section-title">Info</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Delivery</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Terms</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="/">Privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <h3 className="footer__section-title">Follow</h3>
                            <div className="footer__social">
                                <a href="/" className="footer__social-icon"><FacebookIcon /></a>
                                <a href="/" className="footer__social-icon"><TwitterIcon /></a>
                                <a href="/" className="footer__social-icon"><InstagramIcon /></a>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container mw={1300}>
                    <div className="footer__bottom">
                        <p className="footer__copyright">Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development & Hosting by mtc.</p>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Footer;
