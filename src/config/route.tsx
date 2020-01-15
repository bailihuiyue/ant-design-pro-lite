import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";

import NoAauth from '../pages/Authorized/404'
import NotFonud from '../pages/Authorized/403'
import BasicLayout from '../pages/layout/BasicLayout'
import { subsetTo } from '../utils/utils'

// 由于官方不支持路由嵌套,因此router-config没有子路由的概念,都是平级的,如果想实现子路由,可以递归,然后动态生成打平了的<Router>
const routes = [
  {
    path: "/login",
    component: NoAauth
  },
  {
    path: "/123",
    component: BasicLayout,
    exact: true,
    auth: [1, 2]
  },
  {
    path: "/123/404",
    component: NotFonud
  },
  {
    path: "/403",
    component: NoAauth
  }
];

export function SubRoutes(route: any) {
  const auth: string[] | undefined = localStorage.getItem("auth")?.split(",");
  const hasAuth = subsetTo(route.auth, auth);
  return (
    hasAuth ?
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      /> :
      <Redirect to={{ pathname: "/403" }} />
  );
}

export default routes;