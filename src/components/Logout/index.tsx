import React from 'react';
import { Dropdown } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Icon, Menu } from 'antd';
import { observer } from "mobx-react";
import styles from './index.less';

export default observer(() => {
    const logout=()=>{console.log("logout")}
    const logoutMenu = (
      <Menu onClick={logout}>
          <Menu.Item>
          <Icon type="logout" /><FormattedMessage id="logout"/>
          </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={logoutMenu} placement="bottomCenter" className={styles.margin}>
        <span style={{cursor:"pointer"}}>user name</span>
      </Dropdown>
    );
  });
  