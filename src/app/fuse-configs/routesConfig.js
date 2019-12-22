import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ClientsConfig} from 'app/main/clients/ClientsConfig';
import {AgendaConfig} from 'app/main/agenda/AgendaConfig';
import {ProductConfig} from 'app/main/products/ProductConfig';
import {StaffConfig} from 'app/main/staff/StaffConfig';
import {ServiceConfig} from 'app/main/services/ServiceConfig';
import {WelcomeConfig} from "app/main/welcome/WelcomeConfig"
import {Client2Config} from "app/main/client2/Client2Config"


const routeConfigs = [
    ClientsConfig,
    StaffConfig,
    ServiceConfig,
    ProductConfig,
    AgendaConfig,
    WelcomeConfig,
    Client2Config
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/clients"/>
    }
];

export default routes;
