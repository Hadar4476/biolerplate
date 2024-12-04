import { createTheme } from "@mui/material/styles";

import components from "./components";

// COLORS

// blue(light to dark):
// #daf8e3
// #97ebdb
// #00c2c7
// #0086ad
// #005582

// purple(light to dark):
// #efbbff
// #d896ff
// #be29ec
// #800080
// #660066

// white/grey/black(light-dark):
// #FCFCFA
// #EDECE9
// #DEDCD8
// #CFCCC8
// #BFBCB8
// #999591
// #736E6B
// #4D4946
// #262422

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#262422",
    },
    common: {
      white: "#FCFCFA",
      black: "#262422",
    },
    app_bar: {
      backgroundColor: "#FCFCFA",
    },
    text: {
      disabled: "#999591",
      primary: "#FCFCFA",
      secondary: "#CFCCC8",
    },
    button: {
      backgroundColor: "#FCFCFA",
      color: "#00c2c7",
    },
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
  components,
});
