import React, {Component} from 'react';
import NavbarMenu from "../navbar-Hamburger";
import containerNavBarMenuSearch from "./containerNavBarMenuSearch.css"
import BarSearch from "../bar-Search";
import CardFoodContainer from "../card-food-container";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";


class ContainerSearch extends Component {
    render() {
        return (
            <Container fluid={"fluid x "}>
                <NavbarMenu/>
                <BarSearch />
                <CardFoodContainer />
            </Container>
        );
    }
}

export default ContainerSearch;