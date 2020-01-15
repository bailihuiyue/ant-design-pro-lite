import React from "react";
import {
  Route,
} from "react-router-dom";

import NoAauth from '../pages/Authorized/404'
import NotFonud from '../pages/Authorized/403'
import BasicLayout from '../pages/layout/BasicLayout'

const routes = [
  {
    path: "/login",
    component: NoAauth
  },
  {
    path: "/123",
    component: BasicLayout,
    exact:true
  },
  {
    path: "/123/404",
    component: NotFonud
  }
];

export function SubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default routes;