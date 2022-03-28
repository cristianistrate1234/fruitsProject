import './container-items.css'
import React from "react";
import topContainerItems from "./top-container-items";
import bottomContainerItems from "./bottom-container-items";

function ContainerItems() {
    return (
        <div className={`containerItems`}>
            {bottomContainerItems.map((content, index) => {
                return (<div key={index} className={`juice`} style={{ backgroundImage: `url(${content.imgBackground})`}}>
                    <div className={'text'}>
                        <p className={'pText'}>{content.ptext}</p>
                        <p className={'pText1'}>{content.ptext1}</p>
                    </div>
                    <div className={'button1'}>
                        <p className={'text1'}>{content.text1}</p>
                    </div>
                </div>)
            })}

        </div>
    )
}

export default ContainerItems

export function TopThumb() {
    return (
        <div className={'containerTop'}>
            {topContainerItems.map((content, index) => {
                return (
                    <div className={'topContainer1'} key={index}>
                        <img className={"img-ContainerItem"} src={content.img} alt=""/>
                        <button className={"btn-ContainerItem"}>{content.buttonTitle}</button>
                    </div>
                )
            })}
        </div>
    )
}

