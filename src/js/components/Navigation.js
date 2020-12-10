import React from 'react';
import Logo from '../../images/logo.svg';
import { FacebookIcon } from "../icons/FacebookIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { CartIcon } from "../icons/CartIcon";
import Container from "../layout/Container";

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    toggleNav = () => {
        this.setState((prevState) => ({active: !prevState.active}))
    }

    render() {
        return (
            <nav className={"navigation " + (this.props.isScrolling ? 'active' : '')}>
                <Container mw={1300}>
                    <div className="navigation__inner">
                        <div className="navigation__mobile">
                            <div className="navigation__mobile-logo">
                                <a href="/">
                                    <img src={Logo} alt=""/>
                                </a>
                            </div>
                        </div>

                        <div className="navigation__burger" onClick={this.toggleNav}>
                            <div className={"navigation__burger-outer " + (this.state.active ? 'active' : '')}>
                                <div className="navigation__burger-inner"></div>
                            </div>
                        </div>

                        <ul className={"navigation__list " + (this.state.active ? 'active' : '')}>
                            <li className="navigation__social">
                                <a href="/"><FacebookIcon /></a>
                                <a href="/"><TwitterIcon /></a>
                                <a href="/"><InstagramIcon /></a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="/">Shop</a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="/">Plan my kitchen</a>
                            </li>
                            <li className="navigation__logo">
                                <a href="/">
                                    <img src={Logo} alt=""/>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="/">About us</a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="/">Gallery</a>
                            </li>
                            <li className="navigation__button">
                                <a className="btn btn-outline" href="/"><span className="mr-2">My Order</span> <CartIcon /></a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        );
    }
}

export default Navigation;
