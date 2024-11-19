import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { useAppSelector } from "./store";
import { authActions, authSelector } from "./store/reducers/auth";
import { useDispatch } from "react-redux";

import { fetchUser } from "@/services/user";

import PrivateRoute from "@/components/PrivateRoute";
import PublicRoute from "@/components/PublicRoute";

import Login from "@/pages/auth/Login/Login";
import Register from "@/pages/auth/Register/Register";

import Dashboard from "@/pages/dashboard/Dashboard";
import Posts from "@/pages/dashboard/Posts";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useAppSelector(authSelector);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");

    if (!token || !expiryDate) {
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
  };

  const onAutoLogout = (milliseconds: number) => {
    const timeout = setTimeout(() => {
      onLogout();
    }, milliseconds);

    clearTimeout(timeout);
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
    }
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute isLoggedIn={isLoggedIn} />}>
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
