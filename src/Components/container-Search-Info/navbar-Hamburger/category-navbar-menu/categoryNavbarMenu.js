
import React from 'react';
import typeFood from "./categotiMenuObject";

export default function CategoryNavbarMenu() {
  return (
    <div>
      <div className={"container-food-text"}>
        {typeFood.map((content, index) => {
          return (
            <a key={index} href={"#"} className={"food-text"}>{content.title}</a>
          )
        })}
      </div>
    </div>
  );
}

