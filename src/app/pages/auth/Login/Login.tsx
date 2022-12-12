/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { doLogIn } from "../../../../features/auth/authSlice";
import { Button, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Footer from "../../../components/Footer/Footer";
import "./Login.scss";

// import SimpleDialogDemo from "./Popup";
import { CustomizedDialogs, BootstrapDialog } from "./Popup";

const Login = (props: any) => {
  const dispatch = useDispatch();
  const login = () => {
    const loginPayload = {
      user: "admin",
      userType: props.userType,
      email: "admin@gmail.com",
    };
    dispatch(doLogIn(loginPayload));
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
          <img
            className="app-logo"
            src={require("../../../../AppImages/logo.png")}
          />
          <div className="login-inner">
            <div className="inner-content">
              <div className="content-left">
                <h3 className="sign-in">
                  <LockIcon className="lock" /> Sign In
                </h3>
                <h5>to the {userType} Portal</h5>
              </div>
              <div className="content-right">
                {/* <Button className="question-btn" onClick={handleClickOpen}> */}
                <CustomizedDialogs />
                {/* </Button> */}
              </div>
            </div>
            <Button className="btn-submit" onClick={login}>
              {/* <div className="btn-component"> */}
              <img
                className="btn-img"
                src={require("../../../../AppImages/microsoft.png")}
              />
              <h3 className="btn-text">Continue with Microsoft</h3>
              {/* </div> */}
            </Button>
          </div>
          {/* <p>Login page</p>
          <Button variant="contained" onClick={login}>
            Login
          </Button> */}
        </div>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Login;
