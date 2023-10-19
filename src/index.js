import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBgColor: "#f8f9fa",
    goodBtn: "#2f9e44",
    neutralBtn: "#fb9301",
    badBtn: "#e03131",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
