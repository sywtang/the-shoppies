import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "500px",
  lg: "960px",
  xl: "1200px",
});
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const themeConfig = {
  styles: {
    global: {
      "html, body": {
        fontSize: "lg",
        background: "blue.200",
      },
    },
  },
};

const theme = extendTheme({
  config,
  breakpoints,
  themeConfig,
});
export default theme;
