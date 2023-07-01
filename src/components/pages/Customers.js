import React from "react";
import { useState } from "react";
import { Space, Table, Avatar, Typography } from "antd";
import { useEffect } from "react";
import { getUsers } from "../Getapi";
import "../../App.css";
function Customers() {
  return (
    <div className="customers">
      <Space direction="vertical">
        <Typography.Title level={3}>Recent customers</Typography.Title>
        {/* <Typography className="h1">Recent Customers</Typography> */}
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
    getUsers()
      .then((result) => {
        setDataSource(result.users);
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
            {
              title: "image",
              dataIndex: "image",
              render: (me) => {
                return <Avatar src={me} />;
              },
            },
            { title: "ID", dataIndex: "id" },
            { title: "FirstName", dataIndex: "firstName" },
            { title: "LastName", dataIndex: "lastName" },
            { title: "Gender", dataIndex: "gender" },
            { title: "Phone", dataIndex: "phone" },
            { title: "E-mail", dataIndex: "email" },
          ]}
          loading={isLoading}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
        ></Table>
      </Space>
    </>
  );
}

export default Customers;
