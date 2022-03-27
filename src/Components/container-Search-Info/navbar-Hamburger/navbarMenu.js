import navbarMenu from "./navbarMenu.css"
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton, Dropdown} from "react-bootstrap";
import {useState} from "react";
import {FormControl} from "react-bootstrap";

function NavbarMenu() {
  function menuActive() {
    const container = document.querySelector(".container-Food-Free-info")
    const containerFoodInfo = document.querySelector(".container-Food-info")

    containerFoodInfo.classList.toggle("menuActive")
    container.classList.toggle("container-Food-Free-info-Active")
  }


  return (
    <>
    <div className={"container-hamburger-menu"}>
      <div onClick={menuActive} className={"icon-item-hamburger"}>
        <div className={"item-hamburger"}> </div>
        <div className={"item-hamburger"}> </div>
        <div className={"item-hamburger"}> </div>
      </div>

      <div className={"title-All"}>
        <p>All Departament</p>
      </div>

    </div>


    </>
  );

}

export default NavbarMenu;