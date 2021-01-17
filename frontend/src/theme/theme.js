import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "500px",
  lg: "960px",
  xl: "1200px",
});
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, breakpoints });
export default theme;
