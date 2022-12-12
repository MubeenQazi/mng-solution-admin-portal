/** @format */

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/system";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import { useAppSelector } from "../../hooks";
import { authState } from "../../../features/auth/authSlice";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TuneIcon from "@mui/icons-material/Tune";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import "./Sidebar.scss";
import { Link, useLocation, NavLink, Navigate  } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import { SideBarRoutes } from "../../routing";
import { UserType } from '../../enum';

const drawerWidth = 280;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(6, 4, 4, 3),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const { user } = useAppSelector(authState);
  
  let pathname = location.pathname;
  let pathNameSplit = pathname.split("/");
  let path = pathNameSplit[pathNameSplit.length - 1];

  let highlightedSideBar = location.state ? location.state.activeSideBar : path;

  if (highlightedSideBar === undefined) {
    highlightedSideBar = pathNameSplit[pathNameSplit.length - 3]
  }
  if(!highlightedSideBar){
    highlightedSideBar = user.userType == UserType.admin ? 
    'organization' : 
    user.userType == UserType.client ? 
    'subscriptions' : null;
  }

  function handleShowSideBar() {
    let element = document.querySelectorAll(
      ".MuiDrawer-root .MuiPaper-root"
    )[0] as HTMLInputElement | null;
    if (element != null) {
      element.style.left = "-100%";
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let itemsList = SideBarRoutes;

  return (
    <div>
      <Drawer className="responsive-sidebar" variant="permanent">
        <DrawerHeader>
          <CloseIcon
            fontSize="large"
            onClick={handleShowSideBar}
            className="responsive-menu-hamburger"
          />
          <ListItem
            component={Link}
            to={"/dashboard/subscription"}
            className="logo"
          >
            <img
              className="app-logo"
              src={require("../../../AppImages/logo.png")}
            />
          </ListItem>
        </DrawerHeader>
        <List className="sidebarnav">
          {itemsList.map((item, index) => {
            const { text, to, icon, activeSideBar } = item;
            return (
              <ListItem
                component={Link}
                to={to}
                button
                key={text}
                state={{activeSideBar: activeSideBar}}
                className={
                  (highlightedSideBar == activeSideBar) ? "active" : ""
                }
              >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText
                  primary={<Typography className="navLink">{text}</Typography>}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
