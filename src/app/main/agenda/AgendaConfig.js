import React from 'react';

export const AgendaConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/Agenda',
            component: React.lazy(() => import('./Agenda'))
        }
    ]
};
