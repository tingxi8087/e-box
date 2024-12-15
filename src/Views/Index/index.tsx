import { store } from "./store";
export default function App() {
  const { count, name } = store; // 使用状态必须在顶层解构
  return (
    <>
      <div>{name}</div>
      <div>{count}</div>
      <button
        onClick={() => {
          // 直接操作值添加
          store.count += 2;

          // 通过方法添加
          // store.addCount();

          // 打印出修改后的值
          console.log(store.count);
        }}
      >
        add
      </button>
      <br />
      <button
        onClick={() => {
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
