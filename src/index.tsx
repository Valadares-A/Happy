import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

// import "./styles/global.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as bootstrap from "bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
