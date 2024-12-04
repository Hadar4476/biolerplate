import { ButtonProps, ComponentsOverrides, Theme } from "@mui/material";

export const MuiButton: {
  defaultProps?: Partial<ButtonProps>;
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
} = {
  defaultProps: {
    variant: "contained",
    size: "small",
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const { contained, outlined, text } = theme.palette.button ?? {};

      const size = ownerState?.size || "medium";
      const height =
        size === "small" ? "20px" : size === "medium" ? "30px" : "40px";

      const fontSizeFactor =
        size === "small" ? 0.25 : size === "medium" ? 0.5 : 1;

      return {
        height,
        width: "fit-content",
        fontSize: `${fontSizeFactor}rem`,
        fontWeight: 600,
        borderRadius: "32px",
        textTransform: "none",

        "&.MuiButton-contained": {
          backgroundColor: contained?.backgroundColor,
          color: contained?.color,
        },

        "&.MuiButton-outlined": {
          backgroundColor: outlined?.backgroundColor,
          color: outlined?.color,
          borderColor: outlined?.borderColor,

          "&:hover": {
            backgroundColor: contained?.backgroundColor,
            color: contained?.color,
            borderColor: "transparent",
          },
        },

        "&.MuiButton-text": {
          backgroundColor: text?.backgroundColor,
          color: text?.color,

          // disabaling the ripple on text:
          ">.MuiTouchRipple-root": {
            display: "none",
          },

          "&:hover": {
            color: contained?.backgroundColor,
          },
        },
      };
    },
  },
};
