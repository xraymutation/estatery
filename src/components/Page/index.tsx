import React from 'react';
import Header from "../Header";
import Footer from '../Footer';
import styles from './Page.module.scss';

interface PageTypes {
    children: any;
}

const Page = ({children}: PageTypes) => {
    return (
        <div className='row page center'>
            <div className={`col col-xs-12 ${styles.boxed}`}>
                <Header/>
                {children}
                <Footer/>
            </div>

        </div>
    );
};

export default Page;