import React, {Component} from 'react';
import HeaderIon from "../header-ion";
import HeaderWhite from "../header-white";
import FooterIon from "../footer-ion";

class App extends Component {
    render() {
        return (
            <div>
                <HeaderIon />
                <HeaderWhite />
            </div>
        );
    }
}

export default App;
