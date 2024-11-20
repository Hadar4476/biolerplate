import { useRef } from "react";

import useLogout from "./useLogout";

import { fetchUser } from "@/services/user";

import { useDispatch } from "react-redux";
import { authActions } from "@/store/reducers/auth";
import { systemActions } from "@/store/reducers/system";

const useCheckAuth = () => {
  const dispatch = useDispatch();

  const logout = useLogout();

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");

    if (!token || !expiryDate) {
      dispatch(systemActions.setIsAppLoaded(true));
      return;
    }

    const hasExpired = new Date(expiryDate) <= new Date();

    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();

    if (hasExpired) {
      logout();
      dispatch(systemActions.setIsAppLoaded(true));
      return;
    }

    onGetUser();
    onAutoLogout(remainingMilliseconds);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  };

  const onAutoLogout = (milliseconds: number) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      logout();
    }, milliseconds);
  };

  const onGetUser = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");

    if (!userId) {
      return;
    }

    try {
      const user = await fetchUser(userId);

      dispatch(
        authActions.setLoggedInUser({
          isLoggedIn: true,
          token,
          expiryDate,
          user,
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(systemActions.setIsAppLoaded(true));
    }
  };

  return checkAuth;
};

export default useCheckAuth;
