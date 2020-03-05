## 一个简陋的进度栏
| 属性     | 说明               | 类型   |
|----------|--------------------|--------|
| nameList | 所要展示的名称列表 | Array  |
| status   | 进度到达的阶段     | String |
| title    | 进度名称           | String |

## 例如
```
nameList = [
    { id: 1, name: '新建钻机', status: 0 },
    { id: 2, name: '绑定钻机', status: 1 },
    { id: 3, name: '在建中', status: 2, children: 
     [
        { id: 1, name: '照片', status: 2.1 }, 
        { id: 2, name: '任务书', status: 2.2 }, 
        { id: 3, name: '原始数据', status: 2.3 }
     ] },
    { id: 4, name: '岩心上传', status: 3 },
    { id: 5, name: '待审核', status: 4 },
    { id: 6, name: '已完成', status: 5 }
  ];

title = '当前进度';

status='2'
```

## 效果如下：
      ![blockchain](https://github.com/MR-YUZL/Menu/blob/master/public/12C(JM(XCR%259FVGX%40D%254TX0.png)

