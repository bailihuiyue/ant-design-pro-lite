import React from 'react';
import { Select } from 'antd';
import { FormattedMessage } from 'react-intl';

const { Option } = Select;

export default () => {
  const changeLang = (val: string) => {
    localStorage.setItem('lang', val);
  };
  return (
    <Select onChange={changeLang}>
      <Option value="zh-CN" key="zh-CN">
        <FormattedMessage id="chinese" />
      </Option>
      <Option value="en-US" key="en-US">
        <FormattedMessage id="english" />
      </Option>
    </Select>
  );
};
