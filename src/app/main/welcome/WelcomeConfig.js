import React from "react"

export const WelcomeConfig={
    settings:{
        layout:{
            config:{}
        }
    },
    routes:[
        {
            path:"/welcome",
            component:React.lazy(()=>import("./Welcome"))
        },
        {
            path:"/checkout",
            component:React.lazy(()=>import("./components/checkout"))
        }
    ]
}