import React from 'react';
import styles from './Tile.module.scss';
import {Estate} from '../../../../assets/data/estates';
import Heart from "../../../Heart";

const Tile = (data: Estate) => {
    const {
        address,
        img,
        isFavourite = false,
        price,
        title,
        type,

    } = data;
    return (
        <div className={`col col-xs-12 col-md-4 ${styles.container}`}>
            <img src={img} alt='' width={344.18} height={200}/>
            <span className='badge'>{type}</span>
            <div className='row'>
                <span className='price'>{price}<span>/month</span></span>
                <Heart selected={isFavourite}/>
            </div>

            <h4>{title}</h4>
            <p>{address}</p>
        </div>
    );
};

export default Tile;