import { Navigate } from "react-router-dom";

import { ROUTE_NAMES } from "@/types";

import Dashboard from "@/pages/dashboard/Dashboard";
import Posts from "@/pages/dashboard/posts/Posts";
import MainLayout from "@/layouts/MainLayout";

const privateRoutes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <Navigate to={ROUTE_NAMES.DASHBOARD} /> },
      {
        path: ROUTE_NAMES.DASHBOARD,
        element: <Dashboard />,
      },
      { path: ROUTE_NAMES.POSTS, element: <Posts /> },
    ],
  },
  { path: "*", element: <Navigate to={ROUTE_NAMES.DASHBOARD} replace /> },
];

export default privateRoutes;
