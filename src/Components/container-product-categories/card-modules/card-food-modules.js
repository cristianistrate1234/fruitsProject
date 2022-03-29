import React from 'react';

function FilterContent({menuItem})  {

  return (
    menuItem.map((item, id) => {
      console.log(item)
      return (
        <div className={'topContainer1'} key={id}>
          <img className={"img-ContainerItem"} src={item.img} alt=""/>
          <button className={"btn-ContainerItem"}>{item.bottomTitle}
            <span style={{fontWeight: 'bold'}}>{item.price}</span></button>
        </div>
      )
    })
  )

}

export  default FilterContent