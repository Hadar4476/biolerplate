import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

const PrivateLayout = () => {
  return (
    <Box className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <AppBar position="static" className="!bg-red-500">
        <Toolbar>
          <Typography variant="h6" className="text-white">
            Private Layout
          </Typography>
        </Toolbar>
      </AppBar>

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

export default PrivateLayout;
