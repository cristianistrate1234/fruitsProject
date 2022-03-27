import navbarMenu from "./navbarMenu.css"
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pointer from "./img/pointer_icon.png"

function NavbarMenu() {
  function menuActive() {
    const container = document.querySelector(".container-Food-Free-info")
    const button = document.querySelector(".icon-item-hamburger")
    const direction = document.querySelector(".item-direction")
    const containerFoodInfo = document.querySelector(".container-Food-info")

    containerFoodInfo.classList.toggle("menuActive")
    container.classList.toggle("container-Food-Free-info-Active")
    direction.classList.toggle("item-direction-Active")
   button.classList.toggle("item-hamburger-Active")
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

      <div className={"container-direction"}>
        <img className={"item-direction"} alt={"direction"} src={pointer}/>
      </div>
    </div>
    </>
  );

}

export default NavbarMenu;