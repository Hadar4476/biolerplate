import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
  isLoggedIn: boolean;
  redirectTo?: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  isLoggedIn,
  redirectTo = "/",
}) => {
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;
