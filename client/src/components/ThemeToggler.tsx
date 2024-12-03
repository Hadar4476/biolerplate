import { Button, Typography } from "@mui/material";
import { useThemeContext } from "@/context/ThemeContext";

const ThemeToggler = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Current Theme: {mode}
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

export default ThemeToggler;
