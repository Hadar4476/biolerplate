import { fetchUser } from "@/services/user";
import { useAppSelector } from "@/store";
import { authActions, authSelector } from "@/store/reducers/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useCheckAuth = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useAppSelector(authSelector);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");

    if (!token || !expiryDate) {
      setIsLoading(false);
      return;
    }

    const hasExpired = new Date(expiryDate) <= new Date();

    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();

    if (hasExpired) {
      return onLogout();
    }

    onGetUser();
    onAutoLogout(remainingMilliseconds);
  }, []);

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");

    setIsLoading(false);
  };

  const onAutoLogout = (milliseconds: number) => {
    setTimeout(() => {
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
      setIsLoading(false);
    }
  };
};

export default useCheckAuth;
