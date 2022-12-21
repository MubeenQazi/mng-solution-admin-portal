/** @format */

import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Footer from "../../submodule/components/admin/Footer/Footer";
import "./Login.scss";
import { CustomizedDialogs, LogoutPopup, ErrorPopup } from "./Popup";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { AppImages } from "../../shared/images";
import "./Login.scss";
const { microsoft, logo } = AppImages;

const Login = (props: any) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get("https://api.msolcsptest.com/sso/v1/signin", {
        params: { app: "portal" },
      })
      .then(function (response) {
        var name = "__Host-Session";
        var match = document.cookie.match(
          RegExp("(?:^|;\\s*)" + name + "=([^;]*)")
        );
        return match && null;
      })
      .catch(function (error) {
        // navigate("?e=unauthorized");
      });
  });

  const attemptLogin = () => {
    var state = Math.floor(Math.random() * 1000) + 1;
    window.location.href =
      "https://login.microsoftonline.com/common/oauth2/authorize?client_id=791926e0-9d96-45b0-a885-9b198c5628dc&response_mode=form_post&response_type=code%20id_token&scope=openid%20profile&redirect=https%3A%2F%2Fapi.msolcsptest.com%2Fsso%2Fv1%2Fcallback&state=" +
      state;
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let userType = props.userType;
  userType = userType.toLowerCase().replace(/\b[a-z]/g, function (letter: any) {
    return letter.toUpperCase();
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="vh-100 app-login-bg"
    >
      <Grid item>
        <div className="app-login">
          <img className="app-logo" src={logo} />
          <div className="login-inner">
            <div className="inner-content">
              <div className="content-left">
                <h3 className="sign-in">
                  <LockIcon className="lock" /> Sign In
                </h3>
                <h5>to the {userType} Portal</h5>
              </div>
              <div className="content-right">
                {searchParams.get("e") === "signout" && <LogoutPopup />}
                {searchParams.get("e") !== "signout" &&
                  searchParams.get("e") !== null && (
                    <ErrorPopup errorMessage={searchParams.get("e")} />
                  )}
                <CustomizedDialogs />
              </div>
            </div>
            <Button className="btn-submit" onClick={attemptLogin}>
              <img className="btn-img" src={microsoft} />
              <h3 className="btn-text">Continue with Microsoft</h3>
            </Button>
          </div>
        </div>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Login;
