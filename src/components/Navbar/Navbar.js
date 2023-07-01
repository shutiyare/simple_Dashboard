import React from "react";
import { Menu, Space } from "antd";
import "../../App.css";
import {
  AppstoreAddOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sideMenu">
        <Space>
          <Menu
            className="sideMenuvertical"
            mode="vertical"
            style={{ minHeight: "100vh" }}
            onClick={(item) => {
              navigate(item.key);
            }}
            items={[
              {
                label: "Dashboard",
                key: "/",
                icon: <AppstoreAddOutlined />,
              },
              {
                label: "Inventory",
                key: "/inventory",
                icon: <ShopOutlined />,
              },
              {
                label: "Orders",
                key: "/orders",
                icon: <ShoppingCartOutlined />,
              },
              {
                label: "Customers",
                key: "/customers",
                icon: <UserOutlined />,
              },
            ]}
          ></Menu>
        </Space>
      </div>
    </div>
  );
}

export default Navbar;
