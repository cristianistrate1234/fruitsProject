import React, {useState} from 'react';
import "./category-products.css"
import objects from "./objectServerData/objects-Server"
import FilterContent from "./card-modules/index"
import ButtonFiltre from "./button-modules/index"


const allCategories = ['All', ...new Set(objects.map(item => item.category))];
console.log(allCategories);


function FeatureProductsContainer() {
  const [menuItem, setMenuItem] = useState(objects);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {

    if (button === "All") {
      setMenuItem(objects);
      return;
    }

    const filteredData = objects.filter(item => item.category === button);
    setMenuItem(filteredData)

  }

  return (
    <div>
      <div className={'text-container-1'}>
        <h1 className={'footerText'}>Featured Products</h1>
        <div className={'green-line-box'}> </div>
        <div className={'link-style'}>

          <ButtonFiltre button={buttons} filtre={filter}/>

        </div>
      </div>
      <div className={'clas1s'}><br/>
        <div className={'container-products'}>

          <FilterContent menuItem={menuItem}/>

        </div>
      </div>
    </div>
  );

}

export default FeatureProductsContainer;