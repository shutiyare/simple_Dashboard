import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import Dashborad from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Inventory from "../pages/Inventory";
import Orders from "../pages/Orders";

function Approutes() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Dashborad} />
        <Route path="/inventory" Component={Inventory} />
        <Route path="/customers" Component={Customers} />
        <Route path="/orders" Component={Orders} />
      </Routes>
    </div>
  );
}

export default Approutes;
