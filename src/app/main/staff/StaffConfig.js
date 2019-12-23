import React from "react";

export const StaffConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: "/staff",
      component: React.lazy(() => import("./Staff"))
    }
  ]
};
