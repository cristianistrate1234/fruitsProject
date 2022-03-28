import React, {Component} from 'react';
import './header-white.css';
import help from './icons/Help.png';
import like from './icons/like.png';
import bag from './icons/bag.png';
import item from './icons/item_$150.00.png';

class HeaderWhite extends Component {
    render() {
        return (
            <div>
                <nav className={'navbar-two'}>
                    <div className={'header-container'}>
                    <div className={'container-white'}>
                        <div className={'logo-left'}>
                            <img src={help}/>
                        </div>
                        <div className={'text'}>
                            <span> <a href={'#'}>Home</a></span>
                            <span> <a href={'#'}>Shop</a></span>
                            <span> <a href={'#'}>Pages</a></span>
                            <span> <a href={'#'}>Blog</a></span>
                            <span> <a href={'#'}>Contact</a></span>
                        </div>
                        <div className={'right'}>
                            <div className={'badge-like'}>
                                <img src={like}/>
                                <span className={'badge-text'}>3</span>
                            </div>
                            <div className={'badge-bag'}>
                                <img src={bag}/>
                                <span className={'badge-text'}>3</span>
                            </div>
                            <img src={item}/>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderWhite;