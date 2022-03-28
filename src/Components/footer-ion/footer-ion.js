import React, {Component} from 'react';
import './footer-ion.css';
import logo from './icons-footer/logo.png';
import fb from './icons-footer/facebook.png';
import wtsp from './icons-footer/whatsapp.png';
import lk from './icons-footer/linkedin.png';
import twtr from './icons-footer/twitter.png';

class FooterIon extends Component {
    render() {
        return (
            <div className={'footer-bg'}>
                <div className={'footer-container'}>
                    <div className={'footer-top'}>
                        <div className={'first-column'}>
                            <img src={logo}/>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                        <div className={'second-column'}>
                            <h3>Useful link</h3>
                            <div className={'ul-column'}>
                                <ul>
                                    <li>About us</li>
                                    <li>About our shop</li>
                                    <li>Secure shopping</li>
                                    <li>Delivery information</li>
                                    <li>Privacy policy</li>
                                    <li>Our sitemap</li>
                                </ul>
                                <ul className={'uppercase'}>
                                    <li>Who we are</li>
                                    <li>Our service</li>
                                    <li>Project</li>
                                    <li>Contact</li>
                                    <li>Innovation</li>
                                    <li>Testimonials</li>
                                </ul>
                            </div>

                        </div>
                        <div className={'third-column'}>
                            <div>
                                <h1>Sign Up for Our Newsletter</h1>
                                <h3>Get e-mail updates about our latest Shop and special offers.</h3>
                            </div>
                            <div className={'input-btn'}>
                                <input placeholder={'Enter e-mail address'}/>
                                <button type={'button'}>Subscribe</button>
                            </div>
                            <div className={'images-bottom'}>
                                <img src={fb}/>
                                <img src={wtsp}/>
                                <img src={lk}/>
                                <img src={twtr}/>
                            </div>
                        </div>
                    </div>
                    <div className={'footer-bottom'}>
                        <span>Copyright ©2021 All rights reserved | This template is made with 💚 by LOGO</span>
                        <div className={'bank-cards'}>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FooterIon;