import React from 'react';
import {Route, Routes} from 'react-router';
import HomeView from '../views/home';
import SellView from '../views/sell';
import BuyView from '../views/buy';
import RentView from '../views/rent';
import ResourcesView from '../views/resources';
import ManagePropertyView from '../views/manageProperty';

import {paths} from '../config/paths';

const routes = (
    <Routes>
        <Route index path={paths.home} element={<HomeView/>}/>
        <Route exact path={paths.sell} element={<SellView/>}/>
        <Route exact path={paths.buy} element={<BuyView/>}/>
        <Route exact path={paths.rent} element={<RentView/>}/>
        <Route exact path={paths.resources} element={<ResourcesView/>}/>
        <Route exact path={paths.manageProperty} element={<ManagePropertyView/>}/>
    </Routes>
);

export default routes;