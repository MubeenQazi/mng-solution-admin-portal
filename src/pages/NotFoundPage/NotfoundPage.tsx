import {Button, Typography} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import "./NotFound.scss"
import {AppImages} from "../../shared/images";

const {img404} = AppImages;

const NotfoundPage = () => {
  const navigate = useNavigate();
  const handlenotfound = () => {
    navigate("/");
  };
  return (
    <>
      <div className="notfound">
        <img className="notfoundimg" alt="not found" src={img404}/>
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

export default NotfoundPage;
