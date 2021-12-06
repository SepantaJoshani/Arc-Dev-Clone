import React from "react";
import { useState } from "react";

export const NavContext = React.createContext({
  value: 0,
  setValue: () => {},
  selectedIndex: 0,
  setSelectedIndex: () => {},
});

const NavContextProvider = (props) => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const valueHandler = (val) => {
    setValue(val);
  };

  const selectedIndexHandler = (index) => {
    setSelectedIndex(index);
  };

  const ctxValue = {
    value,
    setValue: valueHandler,
    selectedIndex,
    setSelectedIndex: selectedIndexHandler,
  };

  return (
    <NavContext.Provider value={ctxValue}>{props.children}</NavContext.Provider>
  );
};

export default NavContextProvider;
