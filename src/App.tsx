import React, { Suspense, lazy } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import langFile from './locales';
import routes, { SubRoutes } from './config/route'
import { observer } from "mobx-react"

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './global.less';
import { Loading } from '@/components/index'
import BasicLayout from '@/pages/layout/BasicLayout'

moment.locale('zhCN');

export type langType = 'zh-CN' | 'en-US';
const Login = lazy(() => import('@/pages/Login'));

const App: any = observer(({ store }) => {

  const { lang } = store;
  const localLang = localStorage.getItem('lang');
  return (
    // TODO:bug:路由跳转异常
    <div className={styles.app}>
      <IntlProvider locale={lang} messages={langFile[localLang || lang]}>
        <HashRouter >
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route exact path="/login">
                <Login />
              </Route>
            </Suspense>
            <BasicLayout>
              <Suspense fallback={<Loading />}>
                {routes.map((route, i) => (
                  <SubRoutes key={i} {...route} />
                ))}
              </Suspense>
              <Route path="*">
                <div>500</div>
              </Route>
            </BasicLayout>
            <Suspense fallback={<Loading />}>
              <Route path="*">
                <div>500</div>
              </Route>
            </Suspense>
          </Switch>
        </HashRouter >
      </IntlProvider>
    </div >
  );
});

export default App;
