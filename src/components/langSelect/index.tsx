import React from 'react';
import { Dropdown } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Icon, Menu } from 'antd';
import { ClickParam } from 'antd/es/menu';
import styles from './index.less';
import { observer } from "mobx-react";
import store from '../../store/global'

export default observer(() => {
  const changeLang = ({ key }: ClickParam): void => {
    localStorage.setItem('lang', key);
    store.setLang(key)
  };
  const locales = ['zh-CN', 'en-US',];
  const languageLabels = {
    'zh-CN': '简体中文',
    'en-US': 'English',
  };
  const languageIcons = {
    'zh-CN': 'CN',
    'en-US': 'US',
  };
  const { lang } = store;
  const localLang = localStorage.getItem('lang');
  const langMenu = (
    <Menu className={styles.menu} selectedKeys={[localLang || lang]} onClick={changeLang}>
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={langMenu} placement="bottomCenter">
      <span className={styles.dropDown}>
        <Icon type="global"/>
      </span>
    </Dropdown>
  );
});
