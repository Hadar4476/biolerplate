import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { useAppSelector } from "@/store";
import { authSelector } from "@/store/reducers/auth";
import { useEffect } from "react";

const PublicLayout = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useAppSelector(authSelector);

  useEffect(() => {
    console.log(isLoggedIn);

    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <Box className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <AppBar position="static" className="bg-blue-500">
        <Toolbar>
          <Typography variant="h6" className="text-white">
            Public Layout
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container className="flex-grow mt-4">
        <Outlet />
      </Container>

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

export default PublicLayout;
