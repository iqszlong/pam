import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// import Style from './index.css';

moment.locale('zh-cn');

function BasicLayout(props) {
  return (
    <>
      <ConfigProvider locale={zhCN}>
        {props.children}
      </ConfigProvider>
    </>
  );
}

export default BasicLayout;
