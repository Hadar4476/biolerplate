import { fetchUser } from "@/services/user";
import { authActions } from "@/store/reducers/auth";
import { generalActions } from "@/store/reducers/general";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const useCheckAuth = () => {
  const dispatch = useDispatch();

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");

    if (!token || !expiryDate) {
      dispatch(generalActions.setIsAppLoaded(true));
      return;
    }

    const hasExpired = new Date(expiryDate) <= new Date();

    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();

    if (hasExpired) {
      dispatch(generalActions.setIsAppLoaded(true));
      return onLogout();
    }

    onGetUser();
    onAutoLogout(remainingMilliseconds);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  const onAutoLogout = (milliseconds: number) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      onLogout();
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

      console.log(user);

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
      dispatch(generalActions.setIsAppLoaded(true));
    }
  };
};

export default useCheckAuth;
