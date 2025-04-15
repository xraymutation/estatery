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
        <Route path={paths.sell} element={<SellView/>}/>
        <Route path={paths.buy} element={<BuyView/>}/>
        <Route path={paths.rent} element={<RentView/>}/>
        <Route path={paths.resources} element={<ResourcesView/>}/>
        <Route path={paths.manageProperty} element={<ManagePropertyView/>}/>
    </Routes>
);

export default routes;