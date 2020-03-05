import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StatusLine from './StatusLine';
import * as serviceWorker from './serviceWorker';

export const nameList = [
    { id: 1, name: '新建钻机', status: 0 },
    { id: 2, name: '绑定钻机', status: 1 },
    { id: 3, name: '在建中', status: 2, children: [{ id: 1, name: '照片', status: 2.1 }, { id: 2, name: '任务书', status: 2.2 }, { id: 3, name: '原始数据', status: 2.3 }] },
    { id: 4, name: '岩心上传', status: 3 },
    { id: 5, name: '待审核', status: 4 },
    { id: 6, name: '已完成', status: 5 }
  ];
const title = '当前进度';
ReactDOM.render(<StatusLine
    status='2'
    nameList={nameList}
    title={title}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
