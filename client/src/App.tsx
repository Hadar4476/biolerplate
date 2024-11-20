import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useCheckAuth from "./hooks/useCheckAuth";
import useCheckLanguage from "./hooks/useCheckLanguage";

import { useAppSelector } from "./store";
import { systemSelector } from "./store/reducers/system";

import PrivateRoute from "@/components/PrivateRoute";
import PublicRoute from "@/components/PublicRoute";

import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";

import Login from "@/pages/auth/Login/Login";
import Register from "@/pages/auth/Register/Register";

import Dashboard from "@/pages/dashboard/Dashboard";
import Posts from "@/pages/dashboard/Posts";

const App = () => {
  const { isAppLoaded } = useAppSelector(systemSelector);

  const checkLanguage = useCheckLanguage();
  const checkAuth = useCheckAuth();

  useEffect(() => {
    checkLanguage();
    checkAuth();
  }, []);

  if (!isAppLoaded) {
    return <div>loading...</div>;
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
    </Router>
  );
};

export default App;
