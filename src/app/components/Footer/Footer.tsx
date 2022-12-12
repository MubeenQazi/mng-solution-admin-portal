/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const location = useLocation();
  // const isLoginPage = location.pathname.includes("/login");
  // const isFooterBottom = location.pathname == "/dashboard/subscriptions";
  return (
    <footer
      style={{
        position: "relative",
        bottom: "0%",
        left: "0%"
      }}
    >
      <p>
        <b>Privacy Policy</b> | Copyright (c) 2022 Managed Solution LLC
      </p>
    </footer>
  );
};

export default Footer;
