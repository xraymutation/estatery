import React from 'react';
import {Link} from "react-router";
import Logo from "../svg/Logo";
import Menu from "../Menu";
import Button from "../Button";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={`row ${styles.header}`}>
            <div className='col col-xs-12 col-md-3'>
                <Link to='/'>
                    <Logo/>
                </Link>
            </div>
            <Menu/>
            <div className='col col-xs-12 col-md-3'>
                <div className='row between-sm'>
                    <div className='col col-xs-12 col-sm-6'>
                        <Button type='secondary' text='Login'/>
                    </div>
                    <div className='col col-xs-12 col-sm-6'>
                        <Button type='primary' text='Sign up'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;