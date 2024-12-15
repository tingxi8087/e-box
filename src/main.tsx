import React from "react";
import ReactDOM from "react-dom/client";
import "./global.less";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

document.title = "mas-react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const env = process.env.NODE_ENV;
if (env === "development") {
  console.log("这是开发环境");
} else if (env === "production") {
  console.log("这是生产环境");
}
