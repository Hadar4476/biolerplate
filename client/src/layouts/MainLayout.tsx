import { Outlet, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const MainLayout = () => {
  const location = useLocation();

  // Get the current route name

  return (
    <Box className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Current Route: {location.pathname}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <main className="flex-grow m-4">
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

export default MainLayout;
