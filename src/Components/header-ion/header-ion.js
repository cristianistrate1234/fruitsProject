import React, {Component} from 'react';
import './header-ion.css';
import email from './icons/email.png';
import facebook from './icons/facebook.png';
import whatsapp from './icons/whatsapp.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
import english from './icons/Rectangle 1.png';
import signDown from './icons/bottom-side.png';
import login from './icons/login.png';

class HeaderIon extends Component {
    render() {
        return (
            <div>
                <div className={'navbar'}>
                    <div className={'menu-container'}>
                    <div className={'container-left'}>
                        <div className={'email-png'}>
                           <img src={email}/>
                        </div>
                        <span>Hello@colorlib.com</span>
                        <span className={'bar'}>|</span>
                        <span>Free Shipping for all order of $99</span>
                    </div>
                    <div className={'container-right'}>
                        <div className={'icons-right'}>
                            <img src={facebook}/>
                            <img src={whatsapp}/>
                            <img src={linkedin}/>
                            <img src={twitter}/>
                            <img src={english}/>
                        </div>
                        <span className={'english-span'}>English</span>
                        <img src={signDown}/>
                        <span className={'bar'}>|</span>
                        <img src={login}/>
                        <span className={'login'}>Login</span>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderIon;