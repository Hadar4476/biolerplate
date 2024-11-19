import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
  isAuthenticated: boolean;
  redirectTo?: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  isAuthenticated,
  redirectTo = "/",
}) => {
  return isAuthenticated ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;
