import TestPublic from "@/Components/TestPublic";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <Outlet />
    </div>
  );
}
