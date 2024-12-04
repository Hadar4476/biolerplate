import { ButtonProps, ComponentsOverrides, Theme } from "@mui/material";

export const MuiButton: {
  defaultProps?: Partial<ButtonProps>;
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
} = {
  defaultProps: {
    size: "medium",
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const { backgroundColor, color } = theme.palette.button ?? {};

      return {
        backgroundColor,
        color,
      };
    },
  },
};
