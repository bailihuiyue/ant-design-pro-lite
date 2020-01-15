import React from 'react';
import logo from './logo.svg';
import './App.css';

import { IntlProvider, FormattedMessage } from 'react-intl';
import lang_file from './locales';

export type langType = 'zh-CN' | 'en-US';

const App: React.FC = () => {
  const lang = 'zh-CN';
  return (
    <IntlProvider locale={lang} messages={lang_file[lang]}>
      <div>
        <FormattedMessage id="login" />
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </IntlProvider>
  );
};

export default App;
