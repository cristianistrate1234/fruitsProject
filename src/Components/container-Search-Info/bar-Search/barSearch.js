import barSearch from "./barSearch.css"
import React, {Component} from 'react';
import ButtonBarSearch from "../button";
import PhoneColl from "../navbar-Phone-Call";
import {InputGroup,DropdownButton,Dropdown,FormControl} from "react-bootstrap";
import typeFoodCategoryObject from "./typeFoodCategoriObject";

class BarSearch extends Component {
    render() {
        return (
            <div className={"input-navbar-search "}>
                <InputGroup className="mb-3 iii">
                    <DropdownButton
                        variant="outline-secondary"
                        title="All Categories"
                        id="input-group-dropdown-1"
                    >
                        {typeFoodCategoryObject.map((content,index) =>{
                            return(
                              <Dropdown.Item key={index} href="#">{content.title}</Dropdown.Item>
                            )
                        }) }
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Food Subcategories</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-label="Text input with dropdown button" />
                    <ButtonBarSearch className={"button-Search"} name={"SEARCH"} />
                    <PhoneColl />
                </InputGroup>

            </div>
        );
    }
}

export default BarSearch;