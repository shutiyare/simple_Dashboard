import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getOrders, getInventory, getUsers } from "../Getapi";
import { Space, Table, Typography, Card, Statistic } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [revenue, setrevenue] = useState(0);
  const [orders, setorders] = useState(0);
  const [inventory, setinventory] = useState(0);
  const [customers, setcustomers] = useState(0);
  useEffect(() => {
    getOrders().then((res) => {
      setorders(res.total);
      setrevenue(res.discountedTotal);
    });

    getUsers().then((res) => {
      setcustomers(res.total);
    });

    getInventory().then((res) => {
      setinventory(res.total);
    });
  }, []);

  return (
    <div style={{ paddingLeft: "20px" }}>
      <Typography.Title>Dashboard</Typography.Title>
      <br />
      <Space direction="horizontal">
        <Dashboardcard
          icon={
            <ShoppingCartOutlined
              style={{
                backgroundColor: "cyan",
                color: "black",
                padding: 8,
                fontSize: 26,
                borderRadius: 25,
              }}
            />
          }
          title="orders"
          value={orders}
        />
        <Dashboardcard
          icon={
            <MoneyCollectOutlined
              style={{
                backgroundColor: "#7FFFD4",
                color: "black",
                padding: 8,
                fontSize: 26,
                borderRadius: 25,
              }}
            />
          }
          title="Revenue"
          value={revenue}
        />
        <Dashboardcard
          icon={
            <ShoppingOutlined
              style={{
                backgroundColor: "cyan",
                color: "black",
                padding: 8,
                fontSize: 26,
                borderRadius: 25,
              }}
            />
          }
          title="Inventory"
          value={inventory}
        />
        <Dashboardcard
          icon={
            <UserOutlined
              style={{
                backgroundColor: "#7FFFD4",
                color: "black",
                padding: 8,
                fontSize: 26,
                borderRadius: 25,
              }}
            />
          }
          title="Customers"
          value={customers}
        />
      </Space>
      <Typography.Title level={5}>Recent Orders</Typography.Title>
      <Space direction="horizontal">
        <GetRecentUsers />
        <Card style={{ width: 400, height: 250 }}>
          <DahboardChart />
        </Card>
      </Space>
    </div>
  );
}
function Dashboardcard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function GetRecentUsers() {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getOrders()
      .then((result) => {
        setDataSource(result.products.splice(0, 3));
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
          pagination={false}
        ></Table>
      </Space>
    </>
  );
}
function DahboardChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "orders Revenue",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
export default Dashboard;
