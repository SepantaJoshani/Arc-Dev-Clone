import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Paper } from "@material-ui/core";

const Layout = ({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
  children,
}) => {
  return (
    <Fragment>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      {children}

      <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </Fragment>
  );
};

export default Layout;
