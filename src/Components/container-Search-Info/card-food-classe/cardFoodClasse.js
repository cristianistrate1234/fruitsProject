import cardFoodClasse from "./cardFoodClasse.css"
import React from 'react';
import ButtonBarSearch from "../button"
import newInfoFood from "./contentFreeObject";
import CategoryNavbarMenu from "../navbar-Hamburger/category-navbar-menu";


function CardFoodContainer() {

  return (<div className={"box-Container-food fluid"}>
      <div className={"container-Food-info fluid"}>
        <CategoryNavbarMenu/>
      </div>
      {newInfoFood.map((content, index) => {
        return (
          <div key={index} className={"container-Food-Free-info"}>
            <div key={index} className={"container-Food-Free-oferte"}>
              <h5 className={"fruit-text"}> {content.title}</h5>
              <h1 className={"vegetable-text"}>{content.subTitle}</h1>
              <p className={"footerTitle"}>{content.footerTitle} </p>
              <ButtonBarSearch className={"button-Search-SHOP-NOW"} name={content.buttonTitle}/>
            </div>
            <img alt={"food"} className={"img-food-Free"} src={content.imgTitle}/>
          </div>
        )
      })}
    </div>
  );

}

export default CardFoodContainer;