import * as React from "react";
import {styled} from "@mui/system";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import {Link, useLocation} from "react-router-dom";
import {Typography} from "@mui/material";
import {SideBarRoutes} from "../../routes";
import {AppImages} from "../../shared/images";
import "./Sidebar.scss";

const drawerWidth = 280;

const { logo } = AppImages;

const DrawerHeader = styled("div")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(6, 4, 4, 3),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

const Sidebar = () => {
  const location = useLocation();

  let pathname = location.pathname;
  let pathNameSplit = pathname.split("/");
  let path = pathNameSplit[pathNameSplit.length - 1];

  let highlightedSideBar = location.state ? location.state.activeSideBar : path;

  if (highlightedSideBar === undefined) {
    highlightedSideBar = pathNameSplit[pathNameSplit.length - 3]
  }
  if (!highlightedSideBar) {
    highlightedSideBar = 'organization';
  }

  function handleShowSideBar() {
    let element = document.querySelectorAll(
      ".MuiDrawer-root .MuiPaper-root"
    )[0] as HTMLInputElement | null;
    if (element != null) {
      element.style.left = "-100%";
    }
  }

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
            to={"/"}
            className="logo"
          >
            <img
              className="app-logo"
              alt="logo"
              src={logo}
            />
          </ListItem>
        </DrawerHeader>
        <List className="sidebarnav">
          {SideBarRoutes.map((item) => {
            const {text, to, icon, activeSideBar} = item;
            return (
              <ListItem
                component={Link}
                to={to}
                button
                key={text}
                state={{activeSideBar: activeSideBar}}
                className={
                  (highlightedSideBar === activeSideBar) ? "active" : ""
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
