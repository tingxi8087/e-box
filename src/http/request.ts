import axios from "axios";

axios.defaults.baseURL = "http://localhost:6900";
axios.interceptors.response.use((res) => {
  return res.data;
});
export const request = axios;
