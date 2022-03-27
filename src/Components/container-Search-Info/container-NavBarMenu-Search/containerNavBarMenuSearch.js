import React, {Component} from 'react';
import NavbarMenu from "../navbar-Hamburger";
import BarSearch from "../bar-Search";
import CardFoodContainer from "../card-food-classe";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from "react-bootstrap";


class ContainerSearch extends Component {
    render() {
        return (
            <Container fluid={"fluid"}>
                <NavbarMenu/>
                <BarSearch />
                <CardFoodContainer />
            </Container>
        );
    }
}

export default ContainerSearch;