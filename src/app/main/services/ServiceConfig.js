import React from 'react';

export const ServiceConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/services',
            component: React.lazy(() => import('./Service'))
        }
    ]
};
