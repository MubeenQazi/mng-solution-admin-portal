/** @format */

import { Routes as Router, Route, BrowserRouter } from "react-router-dom";
import Layout from "./submodule/components/admin/Layout/Layout";
import OrganizationPage from "./pages/OrganizationPage/OrganizationPage";
import OrganizationDetailPage from "./pages/OrganizationDetailPage/OrganizationDetailPage";
import OrganizationDiscountPage from "./pages/OrganizationDiscountPage/OrganizationDiscountPage";
import NotfoundPage from "./submodule/pages/NotFoundPage/NotfoundPage";
import Start from "./submodule/pages/Start/Start";
import LoginPage from "./pages/LoginPage/LoginPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="*" element={<NotfoundPage />} />
        <Route path="/start" element={<Start app="add" />} />
        <Route path="/login" element={<LoginPage userType="admin" />} />
        <Route path="/" element={<Layout />}>
          <Route path="organization" element={<OrganizationPage />} />
          <Route
            path="organization/detail/:id"
            element={<OrganizationDetailPage />}
          />
          <Route
            path="organization/discount/:organizationDetailId"
            element={<OrganizationDiscountPage />}
          />
        </Route>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
