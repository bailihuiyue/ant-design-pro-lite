import React, { lazy } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";

import { subsetTo } from '../utils/utils'

const NoAauth = lazy(() => import('@/pages/Authorized/404'));
const NotFonud = lazy(() => import('@/pages/Authorized/403'));
const Welcome = lazy(() => import('@/pages/Welcome'));

// 由于官方不支持路由嵌套,因此router-config没有子路由的概念,都是平级的,如果想实现子路由,可以递归,然后动态生成打平了的<Router>
// login写在App.tsx中,不要写在这里
const routes = [
  {
    path: "/welcome",
    component: Welcome
  },
  {
    path: "/error",
    component: NoAauth,
    exact: true
  },
  {
    path: "/error/404",
    component: NotFonud
  },
  // {
  //   path: "*",
  //   component: Welcome
  // }
];

export function SubRoutes(route: any) {
  const auth: string[] | undefined = localStorage.getItem("auth")?.split(",");
  const hasAuth = subsetTo(route.auth, auth);
  return (
    hasAuth || !route.auth ?
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