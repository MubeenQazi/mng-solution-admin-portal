/** @format */

// import React from 'react'

// const Popup = () => {
//   return (
//     <div>
//       Hi this is popup
//     </div>
//   )
// }

// export default Popup
// import question from "../../../../AppImages/question.png";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./Login.scss";
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CancelIcon className="close-btn" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export function CustomizedDialogs() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="question-btn" onClick={handleClickOpen}>
        {/* <img src={require("../../../../AppImages/question.png")} /> */} ?
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        />
        <DialogContent className="popup-content d-flex justify-content-center align-items-center">
          <img
            src={require("../../../../AppImages/LoginPopUpImg.png")}
            alt="popup"
          />
          <Typography className="popup-details">
            <p>If you're having trouble logging in, we can help. Please contact our support department:</p>
            <hr />
            <h4 className="label-contact-support">Contact Support:</h4>
            <h5 className="contact-email">E-mail – o365@managedsolution.com</h5>
            <h5 className="contact-phone">Phone – (888) 563-9132 #2 / (858) 429-3000</h5>
          </Typography>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
    </div>
  );
}
