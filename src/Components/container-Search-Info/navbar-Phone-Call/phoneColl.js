import phoneColl from "./phoneColl.css"
import React, {Component} from 'react';
import phone from "./img/phone_icon.png"


class PhoneColl extends Component {
    render() {
        return (
            <div className={"container-coll-content fluid"}>
                <div className={"icon-phone"}>
                    <img alt={"phone-icon"} src={phone}/>
                </div>
                <div className={"container-phone-number"}>
                   <h6 className={"phone-number-contact"} >+65 11.188.888</h6>
                    <p className={"time-work"}>support 24/7 time</p>
                </div>

            </div>
        );
    }
}

export default PhoneColl;