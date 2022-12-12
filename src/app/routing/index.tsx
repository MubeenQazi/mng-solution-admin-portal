/** @format */

import React, { lazy, Suspense } from "react";

import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import { authState } from "../../features/auth/authSlice";
import { useAppSelector } from "../hooks";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import { UserType, Modules } from "../enum";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard/Dashboard"));
const Notfound = lazy(() => import("../pages/NotFound/Notfound"));
const Login = lazy(() => import("../pages/auth/Login/Login"));
const Organization = lazy(() => import("../pages/dashboard/Organization/Organization"));
const OrganizationDetail = lazy(() => import("../pages/dashboard/Organization/OrganizationDetail"));
const OrganizationDiscount = lazy(() => import("../pages/dashboard/Organization/OrganizationDiscount"));

export const SideBarRoutes = [
  {
    text: "Organizations",
    icon: <GroupWorkOutlinedIcon />,
    to: "/dashboard/organization",
    role: UserType.admin,
    activeSideBar: Modules.Organization
  },
];

const Routing = () => {
  const { isLoggedIn, user } = useAppSelector(authState);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/not-found" element={<Notfound />} />
      {isLoggedIn ? (
        <Route path="/dashboard" element={<DashboardLayout />}>
          
              <Route
                path="*"
                element={<Navigate to={isLoggedIn ? "/not-found" : "/login"} />}
              />
              <Route
                path="organization"
                element={
                  <Suspense fallback={null}>
                    <Organization />
                  </Suspense>
                }
              />
              <Route
                path="organization/detail/:id"
                element={
                  <Suspense fallback={null}>
                    <OrganizationDetail />
                  </Suspense>
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="organization/discount/:organizationDetailId"
                element={
                  <Suspense fallback={null}>
                    <OrganizationDiscount />
                  </Suspense>
                }
              />
        </Route>
      ) : (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login userType={ UserType.admin } />} />
        </Route>
      )}
      <Route
        path="*"
        element={
          <Navigate
            to={
              isLoggedIn
                ? "/dashboard/organization"
                : "/"
            }
          />
        }
      />
    </Routes>
  );
};

export default Routing;
