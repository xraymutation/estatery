import React from 'react';
import {menu} from "../../assets/data/menu";
import {Link} from "react-router";
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className='col col-xs-12 col-sm-6'>
            <ul className={styles.list}>
                {menu?.map((item) =>
                    <li key={item.url} className={styles.item}>
                        <Link to={item.url} title={`Link to: ${item.label}`}>
                            {item.label}
                        </Link>
                    </li>
                )}
            </ul>
        </div>

    );
};

export default Menu;