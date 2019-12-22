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
        }
    ]
}