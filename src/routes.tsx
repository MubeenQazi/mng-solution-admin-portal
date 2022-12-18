import {
  Routes as Router, Route, BrowserRouter,
} from "react-router-dom";
import Layout from "./submodule/components/admin/Layout/Layout";
import OrganizationPage from "./pages/OrganizationPage/OrganizationPage";
import OrganizationDetailPage from "./pages/OrganizationDetailPage/OrganizationDetailPage";
import OrganizationDiscountPage from "./pages/OrganizationDiscountPage/OrganizationDiscountPage";
import NotfoundPage from "./submodule/pages/NotFoundPage/NotfoundPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='*' element={<NotfoundPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="organization" element={<OrganizationPage />} />
          <Route path="organization/detail/:id" element={<OrganizationDetailPage />} />
          <Route path="organization/discount/:organizationDetailId" element={<OrganizationDiscountPage />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;