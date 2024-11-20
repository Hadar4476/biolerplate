import { useAppSelector } from "@/store";
import { authSelector } from "@/store/reducers/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoute = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useAppSelector(authSelector);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
};

export default PublicRoute;
