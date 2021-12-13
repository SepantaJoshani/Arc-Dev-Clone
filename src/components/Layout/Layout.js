import { Paper } from "@material-ui/core";
import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <Paper>{children}</Paper>

      <Footer />
    </Fragment>
  );
};

export default Layout;
