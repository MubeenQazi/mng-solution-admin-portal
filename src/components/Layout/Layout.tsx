import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Box from "@mui/material/Box";
import "./Layout.scss";

const Layout = () => {
  return (
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
};

export default Layout;