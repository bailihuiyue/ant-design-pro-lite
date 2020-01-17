import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import langFile from './locales';
import routes, { SubRoutes } from './config/route'
import { observer } from "mobx-react"

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './global.less';

moment.locale('zhCN');

export type langType = 'zh-CN' | 'en-US';


const App: any = observer(({ store }) => {

  const { lang } = store;
  const localLang = localStorage.getItem('lang');
  return (
    <div className={styles.app}>
      <IntlProvider locale={lang} messages={langFile[localLang || lang]}>
        {/* <div>
        <FormattedMessage id="login" />
        {store.lang}
      </div> */}
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <SubRoutes key={i} {...route} />
            ))}
            <Route path="*">
              <div>500</div>
            </Route>
          </Switch>
        </Router>
      </IntlProvider>
    </div>
  );
});

export default App;
