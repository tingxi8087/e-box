import eBox from "@/main/e-box";

export const store = eBox({
  count: 0,
  name: "张三",
  addCount() {
    store.count += 1;
  },
});
export const getCountByFunc = () => {
  // 不在UI中使用，且方法为挂载到store上，请通过store.$ 获取值 ,更新状态值与在UI中保持一致
  console.log(store.$.count);
};