import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import NavContextProvider from "./context/nav-context";
import AlertContextProvider from "./context/alert-context";

ReactDOM.render(
  <Router>
    <NavContextProvider>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </NavContextProvider>
  </Router>,
  document.getElementById("root")
);
