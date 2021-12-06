import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./components/ui/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import NavContextProvider from "./context/nav-context";

ReactDOM.render(
  <Router>
    <NavContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </NavContextProvider>
  </Router>,
  document.getElementById("root")
);
