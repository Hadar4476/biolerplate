import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const AuthLayout = () => {
  return (
    <Box className="min-h-screen w-full flex flex-col">
      {/* Content */}
      <main className="flex-grow mt-4">
        <Outlet />
      </main>
    </Box>
  );
};

export default AuthLayout;
