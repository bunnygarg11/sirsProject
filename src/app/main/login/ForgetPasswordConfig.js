import React from "react";

export const ForgetPasswordConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: "/forgot-password",
      component: React.lazy(() => import("./components/forgetPassword"))
    }
  ]
};
