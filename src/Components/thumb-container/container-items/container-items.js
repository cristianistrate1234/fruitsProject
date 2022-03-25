import juice from './1.jpg'
import orange from './2.jpg'
import './container-items.css'
import React from "react";
import fruits from './fruits.png'
import juices from './juices.png'
import nuts from './nuts.png'
import veggies from './veggies.png'

function ContainerItems() {
    return (
        <div className={`containerItems`}>
            <div className={`juice`} style={{backgroundImage: `url(${juice})`}}>
                <div className={'text'}>
                    <p className={'pText'}>Summer Fruits</p>
                    <p className={'pText1'}>100% All Natural Fruit Juice</p>
                </div>
                <div className={'button1'}>
                    <p className={'text1'}>SHOP NOW</p>
                </div>
            </div>
            <div className={`orange-juice`} style={{backgroundImage: `url(${orange})`}}>
                <div className={'text'}>
                    <p className={'pText'}>Dried & Drinks {<br/>}Fruits</p>
                    <p className={'pText1'}>100% All Natural Fruit Juice</p>
                </div>
                <div className={'button2'}>

                    <p className={'text1'}>SHOP NOW</p>

                </div>
            </div>
        </div>
    )
}

export default ContainerItems

export function TopThumb(){
    return(
        <div className={'containerTop'}>
            <div className={'topContainer1'}>
                <img src={fruits} alt=""/>
                <button>Fresh Fruit</button>
            </div>
            <div className={'topContainer1'}>
                <img src={juices} alt=""/>
                <button>Dried Fruit</button>
            </div>
            <div className={'topContainer1'}>
                <img src={nuts} alt=""/>
                <button>Vegetables</button>
            </div>
            <div className={'topContainer1'}>
                <img src={veggies} alt=""/>
                <button>Drink Fruits</button>
            </div>
        </div>
    )
}