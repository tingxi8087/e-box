import Layout from "@/Layout/Layout";
import Index from "@/Views/Index";
import { createBrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
export const router: any = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>404</>,
    children: [
      {
        path: "/index",
        element: <Index />,
      },
    ],
  },
  {
    path: "/test",
    element: <>测试页面</>,
    errorElement: <>404</>,
  },
]);
