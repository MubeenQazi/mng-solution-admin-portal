/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Box from "@mui/material/Box";
import "./DashboardLayout.scss";

const DashboardLayout = () => (
  <div className="dashboard-layout">
    <Box sx={{ display: "flex" }}>
      <aside>
        <Sidebar />
      </aside>
      <Box
        component="main"
        className="dahboard-layout-main"
      >
        <Header />
        <Box
          className="content"
          sx={{
            backgroundColor: "#fff",
            marginTop: `20px`,
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  </div>
);

export default DashboardLayout;
