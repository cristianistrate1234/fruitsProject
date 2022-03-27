import React, {Component} from 'react';
import CardBlog from "../blog-info";
import ContainerSearch from "../container-Search-Info/container-NavBarMenu-Search";
class App extends Component {
    render() {
        return (
            <div>
            <CardBlog />
              <ContainerSearch />
            </div>
        );
    }
}

export default App;
