import {
  Routes as Router, Route, BrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import OrganizationPage from "./pages/OrganizationPage/OrganizationPage";
import OrganizationDetailPage from "./pages/OrganizationDetailPage/OrganizationDetailPage";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import {Modules} from "./shared/enum/enum";
import OrganizationDiscountPage from "./pages/OrganizationDiscountPage/OrganizationDiscountPage";
import NotfoundPage from "./submodule/pages/NotFoundPage/NotfoundPage";

export const SideBarRoutes = [
  {
    text: "Organizations",
    icon: <GroupWorkOutlinedIcon />,
    to: "/organization",
    activeSideBar: Modules.Organization
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Layout />}>
          <Route path='*' element={<NotfoundPage />} />
          <Route path="organization" element={<OrganizationPage />} />
          <Route path="organization/detail/:id" element={<OrganizationDetailPage />} />
          <Route path="organization/discount/:organizationDetailId" element={<OrganizationDiscountPage />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;