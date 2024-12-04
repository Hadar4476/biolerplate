import { PaletteOptions } from "@mui/material/styles";
import { TypeText } from "@mui/material/styles";

interface BasePalette {
  app_bar?: {
    backgroundColor?: string;
  };
  text?: {
    disabled?: string;
    primary?: string;
    secondary?: string;
    title?: string;
  };
  button?: {
    contained: {
      backgroundColor?: string;
      color?: string;
    };
    outlined: {
      backgroundColor?: string;
      color?: string;
      borderColor: string;
    };
    text: {
      backgroundColor?: string;
      color?: string;
    };
  };
}

declare module "@mui/material/styles" {
  interface TypeText {
    title?: string; // Add custom property here
    link?: string;
  }

  interface Palette extends BasePalette {}

  interface PaletteOptions extends BasePalette {}
}
