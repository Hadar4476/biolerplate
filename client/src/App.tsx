import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "@/components/PrivateRoute";
import PublicRoute from "@/components/PublicRoute";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import Dashboard from "@/pages/dashboard/Dashboard";
import Posts from "@/pages/dashboard/Posts";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<Login onLogin={onLogin} />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
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
