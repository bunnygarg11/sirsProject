import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {AgendaConfig} from 'app/main/agenda/AgendaConfig';
import {ProductConfig} from 'app/main/products/ProductConfig';
import {StaffConfig} from 'app/main/staff/StaffConfig';
import {ServiceConfig} from 'app/main/services/ServiceConfig';
import {WelcomeConfig} from "app/main/welcome/WelcomeConfig"
import {ClientConfig} from "app/main/client/ClientConfig"
import {LoginConfig} from 'app/main/login/LoginConfig';
import {ForgetPasswordConfig} from 'app/main/login/ForgetPasswordConfig';


const routeConfigs = [
    StaffConfig,
    ServiceConfig,
    ProductConfig,
    AgendaConfig,
    WelcomeConfig,
    ClientConfig,
    LoginConfig,
    ForgetPasswordConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/clients"/>
    }
];

export default routes;
