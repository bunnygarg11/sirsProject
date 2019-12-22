import React from 'react';

export const ClientConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/clientlist',
            component: React.lazy(() => import('./Client'))
        },
        {
            path:"/editclient",
            component:React.lazy(()=>import("./components/editClient"))
        },
        {
            path:"/seeclient",
            component:React.lazy(()=>import("./components/SeeClient"))
        },
        {
            path:"/newclient",
            component:React.lazy(()=>import("./components/NewClient"))
        }
    ]
};
