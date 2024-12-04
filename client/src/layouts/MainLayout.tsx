import { Outlet, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme,
  Stack,
  Button,
} from "@mui/material";

import useTrans from "@/hooks/useTrans";
import useLogout from "@/hooks/useLogout";
import { useThemeContext } from "@/context/ThemeContext";

import LanguageSelector from "@/components/LanguageSelector";

const MainLayout = () => {
  const location = useLocation();
  const t = useTrans();
  const logout = useLogout();
  const theme = useTheme();
  const { onToggleTheme, mode } = useThemeContext();

  console.log({ mode });

  return (
    <Box className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="flex-1"
            variant="h6"
            style={{ color: theme.palette.text?.secondary }}
          >
            Current Route: {location.pathname}
          </Typography>
          <Stack direction="row" alignItems="center" gap="4px">
            <LanguageSelector />
            <Button onClick={onToggleTheme}>{t("system.toggle_theme")}</Button>
            <Button onClick={logout}>{t("logout")}</Button>
          </Stack>
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
