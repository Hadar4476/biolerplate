import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import useCheckAuth from "./hooks/useCheckAuth";
import useCheckLanguage from "./hooks/useCheckLanguage";

import { useAppSelector } from "./store";
import { systemActions, systemSelector } from "./store/reducers/system";

import PrivateRoute from "@/components/PrivateRoute";
import PublicRoute from "@/components/PublicRoute";

import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";

import Login from "@/pages/auth/Login/Login";
import Register from "@/pages/auth/Register/Register";

import Dashboard from "@/pages/dashboard/Dashboard";
import Posts from "@/pages/dashboard/Posts";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const { isAppLoaded } = useAppSelector(systemSelector);

  const checkLanguage = useCheckLanguage();
  const checkAuth = useCheckAuth();

  useEffect(() => {
    const initializeApp = async () => {
      checkLanguage(); // This is synchronous
      await checkAuth(); // Wait for the async function to complete

      // Mark the app as loaded
      dispatch(systemActions.setIsAppLoaded(true));
    };

    initializeApp();
  }, []);

  if (!isAppLoaded) {
    return <div>loading...</div>;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Catch-All Route */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default App;
