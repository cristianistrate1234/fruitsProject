import React, {Component} from 'react';
import HeaderIon from "../header-ion";
import HeaderWhite from "../header-white";
import FooterIon from "../footer-ion";
import SliderProductBlock from "../slider-product-block";
import ThumbContainer from "../thumb-container/thumb-container";
import CardBlog from "../blog-info";
import ContainerSearch from "../container-Search-Info/container-NavBarMenu-Search";
import FeatureProductsContainer from "../container-product-categories";

class App extends Component {
    render() {
        return (
            <div>
                <HeaderIon />
                <HeaderWhite />
                <ContainerSearch />
                <ThumbContainer />
                <SliderProductBlock />
              <FeatureProductsContainer />
                <CardBlog />
                <FooterIon />
            </div>
        );
    }
}
export default App;
