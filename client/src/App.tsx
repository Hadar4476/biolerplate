import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "@/components/PrivateRoute";
import PublicRoute from "@/components/PublicRoute";

import Login from "@/pages/auth/Login/Login";
import Register from "@/pages/auth/Register/Register";

import Dashboard from "@/pages/dashboard/Dashboard";
import Posts from "@/pages/dashboard/Posts";
import PublicLayout from "./layouts/PublicLayout";
import useCheckAuth from "./hooks/useCheckAuth";
import { useAppSelector } from "./store";
import { generalSelector } from "./store/reducers/general";

const App = () => {
  const { isAppLoaded } = useAppSelector(generalSelector);

  useCheckAuth();

  if (!isAppLoaded) {
    return <div>loading...</div>;
  }

  return (
    <Router>
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
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Dashboard />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
