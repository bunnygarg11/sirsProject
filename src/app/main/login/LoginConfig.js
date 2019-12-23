import React from "react";

export const LoginConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: "/login",
      component: React.lazy(() => import("./components/login"))
    }
  ]
};
