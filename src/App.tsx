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

moment.locale('zhCN');

export type langType = 'zh-CN' | 'en-US';
const Login = lazy(() => import('@/pages/Login'));

const App: any = observer(({ store }) => {

  const { lang } = store;
  const localLang = localStorage.getItem('lang');
  return (
    <div className={styles.app}>
      <IntlProvider locale={lang} messages={langFile[localLang || lang]}>
        <HashRouter >
          <Switch>
            <Route exact path="/login">
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            </Route>
            {routes.map((route, i) => (
              <SubRoutes key={i} {...route} />
            ))}
            <Route path="*">
              <Suspense fallback={<Loading />}>
                <div>500</div>
              </Suspense>
            </Route>
          </Switch>
        </HashRouter >
      </IntlProvider>
    </div >
  );
});

export default App;
