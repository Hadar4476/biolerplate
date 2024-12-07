import { ComponentsOverrides, Theme } from "@mui/material";

export const MuiDrawer: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiDrawer"];
} = {
  styleOverrides: {
    root: ({}) => {
      return {
        zIndex: 10001,

        ">.MuiDrawer-paper": {
          width: "100%",
          maxWidth: "390px",
        },
      };
    },
  },
};
