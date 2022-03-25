import React from 'react';
import './thumb-container.css'
import ContainerItems from "./container-items/container-items";
import {TopThumb} from "./container-items/container-items";
function ThumbContainer() {
    return (
        <div className={'container'}>
            <div className={'containerTop'}>
            <TopThumb />
            </div>

            <div className={'containerBottom'}>
                <ContainerItems />
            </div>
        </div>
    )
}






export default ThumbContainer;