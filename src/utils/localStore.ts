import * as util from "mas-encrypt";
const KEY = "8087";
export const localStoreSet = (key: string, value: string) => {
  try {
    let store: any = window.localStorage.getItem("masStore");
    if (!store) {
      store = {};
    } else {
      store = util.decode(store, KEY, 0);
    }
    if (!store) {
      throw Error("localstore出错！请清除本地缓存");
    }
    store[key] = value;
    store = util.encode(store, KEY, 0);
    window.localStorage.setItem("masStore", store);
    return true;
  } catch (error) {
    throw Error("localstore出错！请清除本地缓存");
  }
};
export const localStoreGet = (key: string) => {
  const store: any = localStoreGetAll();
  if (!store || !store[key]) {
    return null;
  } else {
    return store[key];
  }
};
export const localStoreHas = (key: string) => !!localStoreGet(key);
export const localStoreGetAll = () => {
  try {
    let store: any = window.localStorage.getItem("masStore");
    if (!store) {
      store = {};
      store = util.encode(store, KEY, 0);
      window.localStorage.setItem("masStore", store);
      return {};
    } else {
      return util.decode(store, KEY, 0);
    }
  } catch (error) {
    throw Error("localstore出错！请清除本地缓存");
  }
};
export const localStoreDel = (key: string) => {
  const store: any = localStoreGetAll();
  if (!store || !store[key]) {
    return false;
  } else {
    delete store[key];
    window.localStorage.setItem(
      "masStore",
      util.encode(store, "8087", 0) as any
    );
    return true;
  }
};
export default {
  get: localStoreGet,
  set: localStoreSet,
  getAll: localStoreGetAll,
  delete: localStoreDel,
};
