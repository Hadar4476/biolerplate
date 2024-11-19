import { createTheme } from "@mui/material";
import components from "./components";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: components,
});

export { lightTheme };
