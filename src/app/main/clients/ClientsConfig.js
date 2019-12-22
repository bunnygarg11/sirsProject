import React from 'react';

export const ClientsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/client',
            component: React.lazy(() => import('./Clients'))
        }
    ]
};
