# e-box

一个关于React的超级简单的全局状态管理器

参考自 [nanxiaobei/resso](https://github.com/nanxiaobei/resso)

安装

```sh
cnpm i e-box
# or
yarn add e-box
# or
npm i e-box
```

## 使用

### 在React中使用

// store.js

```javascript
import eBox from "e-box";

export const store = eBox({
  count: 0,
  name: "张三",
  addCount() {
    store.count += 1;
  },
});
export const getCountByFunc = () => {
  // console.log(store.count); //这行代码可能会引起报错
  // 不在UI中使用，且方法为挂载到store上，请通过store.$ 获取值 ,更新状态值与在UI中保持一致
  console.log(store.$.count);
};
```

// App.js

```javascript
import { store } from "./store";
export default function App() {
  const { count, name，addCount } = store; // UI中展示状态必须在顶层解构
  return (
    <>
      <div>{name}</div>
      <div>{count}</div>
      <button
        onClick={() => {
          // 直接操作值添加
          store.count += 2;

          // 通过方法添加
          // addCount();

          // 打印出修改后的值
          console.log(store.count);
        }}
      >
        add
      </button>
      <br />
      <button
        onClick={() => {
          // 批量更新
          store.set({
            name: "李四",
            count: 99,
          });
        }}
      >
        批量更新值
      </button>
    </>
  );
}
```

## 预置对象

| name | 描述 | 示例 |
|----|----|----|
| get | 调用函数获取值，与$返回的对象一致 | store.get() |
| set | 批量更新值 | store.set({xxx:xxx}) |
| $ | 用于 | store.$ |


