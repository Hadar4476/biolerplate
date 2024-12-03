import { ROUTE_NAMES } from "@/types";

import Dashboard from "@/pages/dashboard/Dashboard";
import Posts from "@/pages/dashboard/Posts";

const privateRoutes = [
  {
    path: ROUTE_NAMES.DASHBOARD,
    element: <Dashboard />,
  },
  { path: ROUTE_NAMES.POSTS, element: <Posts /> },
];

export default privateRoutes;
