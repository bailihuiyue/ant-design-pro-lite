import React from 'react';
import { Select } from 'antd';
import { FormattedMessage } from 'react-intl';
import { observer } from "mobx-react";
import store from '../../store/global'
const { Option } = Select;

export default observer(() => {
  const changeLang = (val: string) => {
    localStorage.setItem('lang', val);
    store.setLang(val)
  };
  return (
    <Select onChange={changeLang} style={{width:"100px"}}>
      <Option value="zh-CN" key="zh-CN">
        <FormattedMessage id="chinese" />
      </Option>
      <Option value="en-US" key="en-US">
        <FormattedMessage id="english" />
      </Option>
    </Select>
  );
});
