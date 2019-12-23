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
            component:React.lazy(()=>import("./components/clientform/editClient"))
        },
        {
            path:"/seeclient",
            component:React.lazy(()=>import("./components/Tabs/SeeClient"))
        },
        {
            path:"/newclient",
            component:React.lazy(()=>import("./components/clientform/NewClient"))
        }
    ]
};
