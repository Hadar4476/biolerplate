import { Outlet } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const AuthLayout = () => {
  return (
    <Box className="min-h-screen w-full flex flex-col">
      {/* Content */}
      <main className="flex-grow mt-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Box
        component="footer"
        className="bg-gray-800 text-white py-4 text-center"
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} My Application. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthLayout;
