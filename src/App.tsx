import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import langFile from './locales';
import routes, { SubRoutes } from './config/route'

export type langType = 'zh-CN' | 'en-US';

const App: React.FC = () => {
  const lang = 'zh-CN';
  return (
    <IntlProvider locale={lang} messages={langFile[lang]}>
      <div>
        <FormattedMessage id="login" />
      </div>
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
  );
};

export default App;
