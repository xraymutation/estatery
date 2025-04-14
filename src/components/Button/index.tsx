import React from 'react';
import styles from './Button.module.scss';

interface ButtonTypes {
    type: 'primary' | 'secondary' | 'tab',
    text: string,
    isActive?: boolean;
}

const Button = ({type = 'secondary', text, isActive}: ButtonTypes) => {
    return (
        <button className={`${styles.button} ${styles[type]} ${isActive && styles.active} `}>
            {text}
        </button>
    );
};

export default Button;