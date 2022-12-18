import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import {Modules} from "../../submodule/constants/constants";

export const SideBarRoutesList = [
  {
    text: "Organizations",
    icon: GroupWorkOutlinedIcon,
    to: "/organization",
    activeSideBar: Modules.Organization
  },
];