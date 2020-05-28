import { Button, Result } from 'antd';
import React from 'react';
import { LangSelect, Logout, Footer } from '../../components/index'
import { Layout, Menu, Icon } from 'antd';
import { createHashHistory,createBrowserHistory } from 'history'
const { Header, Sider, Content } = Layout;

import styles from './index.less';
import { FormattedMessage } from 'react-intl';

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    current: '/welcome',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  jump=({key})=>{
    const history = createHashHistory();
    history.push(key);
    this.setState({
      current: key,
    });
  }

  render() {
    return (
      <Layout className={styles.layout}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">Ant pro lite 😉</div>
          <Menu theme="dark" mode="inline" selectedKeys={[this.state.current]}>
            <Menu.Item key="/welcome" onClick={this.jump}>
              <Icon type="user" />
              <span>welcome</span>
            </Menu.Item>
            <Menu.Item key="/403" onClick={this.jump}>
              <Icon type="video-camera" />
              <span>403</span>
            </Menu.Item>
            <Menu.Item key="/error/404" onClick={this.jump}>
              <Icon type="upload" />
              <span>error/404</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className={styles.rightContent}>
              <LangSelect />
              <Logout />
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;