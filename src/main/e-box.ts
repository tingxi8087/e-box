import { useSyncExternalStore } from "use-sync-external-store/shim";
function eBox<T extends object>(initState: T) {
  let store = JSON.parse(JSON.stringify(initState));
  const funcs: any = [];
  Object.keys(initState).forEach((key) => {
    const value = (initState as any)[key];
    if (typeof value == "function") {
      funcs[key] = value;
    }
  });
  const listeners = new Set();
  function subscribe(listener: any) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
  function getSnapshot(key: any) {
    return store[key];
  }
  const proxy = new Proxy(store, {
    set: (_, key, value) => {
      store[key] = value;
      listeners.forEach((listener: any) => listener());
      return true;
    },
    get: (_, key) => {
      if (key == "$") {
        return store;
      }
      if (key == "set") {
        return (obj: T) => {
          store = { ...store, ...obj };
          listeners.forEach((listener: any) => listener());
        };
      }
      if (key == "get") {
        return () => {
          return store;
        };
      }
      if (funcs[key]) {
        return funcs[key];
      }
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useSyncExternalStore(subscribe, () => getSnapshot(key));
      } catch (error) {
        // #
      }
      return store[key];
    },
  });
  return proxy as T & { set: (obj: Partial<T>) => void; get: () => T; $: T };
}
export default eBox;
