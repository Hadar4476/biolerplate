import { PaletteOptions } from "@mui/material/styles";

interface BasePalette {
  app_bar?: {
    backgroundColor?: string;
  };
  button?: {
    backgroundColor?: string;
    color?: string;
  };
}

declare module "@mui/material/styles" {
  interface Palette extends BasePalette {}

  interface PaletteOptions extends BasePalette {}
}
