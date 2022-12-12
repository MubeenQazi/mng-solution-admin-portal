import { Button, Typography } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss"

const Notfound = () => {
  const navigate = useNavigate();
  const handlenotfound = () => {
    navigate("/");
  };
  return (
    <>
      <div className="notfound">
        <img className="notfoundimg" src={require("../../../AppImages/img404.png")} />
        <Typography className="notfoundcontent">The Page You Requested Could Not Found!</Typography>
        <Button className="notfoundbtn" variant="contained" onClick={handlenotfound}>
          Back
        </Button>
        <footer>
            <p>
                <b>Privacy Policy</b> | Copyright (c) 2022 Managed Solution LLC
            </p>
        </footer>
      </div>
    </>
  );
};

export default Notfound;
