import React, { useEffect } from "react";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { doLogout } from "../../../features/auth/authSlice";
import Menu from "@mui/material/Menu";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(doLogout());
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };  

  const location = useLocation();

  let pathname = location.pathname;
  let pathNameSplit = pathname.split("/");

  //console.log(pathNameSplit);

  let firstHeading = pathNameSplit[pathNameSplit.length - 3];
  let secondHeading = pathNameSplit[pathNameSplit.length - 2];

  let pageHeading = "";

  if (secondHeading === "dashboard") {
    secondHeading = pathNameSplit[pathNameSplit.length - 1];
  }

  if (secondHeading.indexOf("detail") == -1) {
    pageHeading = secondHeading;
    if (secondHeading == "discount"){
      pageHeading = firstHeading + " " + secondHeading; 
     }
  } else {
    pageHeading = firstHeading + " " + secondHeading;
  }

  pageHeading = pageHeading !== ""  ? pageHeading
    .toLowerCase()
    .replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    }) : "Dashboard";

  function handleShowSideBar() {
    let element = document.querySelectorAll(
      ".MuiDrawer-root .MuiPaper-root"
    )[0] as HTMLInputElement | null;
    if (element != null) {
      element.style.left = "0";
    }
  }

  return (
    <header>
      <Box
        className="dashboard-header"
        sx={{
          display: `flex`,
          justifyContent: "space-between",
          margin: `0px`,
        }}
      >
        <TableRow className="row-heading-text-close-button">
          <TableCell
            className="responsive-menu-hamburger"
            sx={{ textDecoration: "none" }}
          >
            <MenuIcon fontSize="large" className="sidebar-close-icon" onClick={handleShowSideBar} />
          </TableCell>
          <TableCell align="left">
            <h1 style={{fontFamily: "Raleway"}}>{pageHeading}</h1>
          </TableCell>
        </TableRow>

        <Tooltip className="head-desk" title="Account settings">
          {/* <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton> */}
          <Button
            className="profile-button"
            onClick={handleClick}
            size="small"
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            aria-controls={open ? "account-menu" : undefined}
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Sarah Robert
            <br />
            sarah@tenant.onmicrosoft.com
          </Button>
        </Tooltip>
        <Tooltip className="head-mob" title="Account settings">
          <Button
            className="profile-button-mob"
            onClick={handleClick}
            size="small"
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            aria-controls={open ? "account-menu" : undefined}
            variant="contained"
          >
            <PersonIcon />
          </Button>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider /> */}
        {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
