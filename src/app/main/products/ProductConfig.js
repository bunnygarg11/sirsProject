import React from 'react';

export const ProductConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/products',
            component: React.lazy(() => import('./Product'))
        },
    ]
};
