import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  redirectTo = "/login",
}) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
