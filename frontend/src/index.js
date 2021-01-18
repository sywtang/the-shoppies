import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box padding="20px" height="100%">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
