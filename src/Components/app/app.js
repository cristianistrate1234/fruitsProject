import React, { Component } from "react";
import SliderProductBlock from "../slider-product-block";
import ThumbContainer from "../thumb-container/thumb-container";
import CardBlog from "../blog-info";
import ContainerSearch from "../container-Search-Info/container-NavBarMenu-Search";

class App extends Component {
    render() {
        return (
            <div>
                <ContainerSearch/>
                <ThumbContainer/>
          <SliderProductBlock /
                <CardBlog/>
            </div>
        );
    }
}
export default App;