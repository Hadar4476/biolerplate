import { ROUTE_NAMES } from "@/types";

import Login from "@/pages/auth/Login/Login";
import Register from "@/pages/auth/Register/Register";

const publicRoutes = [
  { path: ROUTE_NAMES.LOGIN, element: <Login /> },
  { path: ROUTE_NAMES.REGISTER, element: <Register /> },
];

export default publicRoutes;
