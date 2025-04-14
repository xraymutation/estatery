import React from 'react';
import IconHeart from "../svg/Heart";
import styles from './Heart.module.scss';

interface Heart {
    selected?: boolean;
}

const Heart = ({selected}: Heart) => {
    return (
        <button className={`${styles.heart} ${selected && styles.selected}`}>
            <IconHeart/>
        </button>
    );
};

export default Heart;