import React from "react";
import { useState } from "react";
import { Space, Table, Typography } from "antd";
import { useEffect } from "react";
import { getOrders } from "../Getapi";
import "../../App.css";
function Orders() {
  return (
    <div className="customers">
      <Space direction="vertical">
        <Typography.Title level={3}>Recent Orders</Typography.Title>

        <GetRecentUsers />
      </Space>
    </div>
  );
}
function GetRecentUsers() {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getOrders()
      .then((result) => {
        setDataSource(result.products);
        setisLoading(false);
        console.log(dataSource);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Space>
        <Table
          columns={[
            { title: "Title", dataIndex: "title" },
            {
              title: "Price",
              dataIndex: "price",
              render: (price) => <span>${price}</span>,
            },
            {
              title: "discountedPrice",
              dataIndex: "discountedPrice",
              render: (discount) => <span>${discount}</span>,
            },
            { title: "Quantity", dataIndex: "quantity" },
            { title: "Total", dataIndex: "total" },
          ]}
          loading={isLoading}
          dataSource={dataSource}
        ></Table>
      </Space>
    </>
  );
}

export default Orders;
