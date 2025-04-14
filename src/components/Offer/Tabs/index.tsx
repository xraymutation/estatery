import React, {useState} from 'react';
import Button from "../../Button";
import styles from './Tabs.module.scss';

const Tabs = () => {
    return (
        <div className={styles.container}>
            <Button type='tab' text='Houses' isActive={true}/>
            <Button type='tab' text='Apartments'/>
        </div>
    );
};

export default Tabs;