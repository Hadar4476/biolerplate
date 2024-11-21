import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAppSelector } from "@/store";
import { authSelector } from "@/store/reducers/auth";
import { systemSelector } from "@/store/reducers/system";

const PublicRoute = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useAppSelector(authSelector);
  const { isAppLoaded } = useAppSelector(systemSelector);

  useEffect(() => {
    if (isAppLoaded && isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isAppLoaded, isLoggedIn, navigate]);

  // Render nothing until the app is loaded
  if (!isAppLoaded) {
    return null;
  }

  // If logged in, navigation will handle redirection
  return !isLoggedIn ? <Outlet /> : null;
};

export default PublicRoute;
