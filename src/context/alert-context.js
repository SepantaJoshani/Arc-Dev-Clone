import React, { useReducer } from "react";

const initialState = {
  open: false,
  message: "",
  backgroundColor: "",
  severity: "",
};

const alertReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        open: true,
        message: action.message,
        backgroundColor: "#4BB543",
        severity: "success",
      };

    case "ERROR":
      return {
        open: true,
        message: action.message,
        backgroundColor: "#FF3232",
        severity: "error",
      };

    case "CLOSE":
      return { ...state, open: false };

    default:
      break;
  }
};

export const AlertContext = React.createContext({
  open: false,
  message: "",
  severity: "",
  backgroundColor: "",
  successHandler: () => {},
  errorHandler: () => {},
  closeHandler: () => {},
});

const AlertContextProvider = (props) => {
  const [alertState, dispatch] = useReducer(alertReducer, initialState);

  const successHandler = () => {
    dispatch({ type: "SUCCESS", message: "Data Sent Successfully" });
  };

  const errorHandler = () => {
    dispatch({ type: "ERROR", message: "Something Went wrong" });
  };

  const closeHandler = () => {
    dispatch({ type: "CLOSE" });
  };

  const contexValue = {
    open: alertState.open,
    successHandler,
    errorHandler,
    closeHandler,
    message: alertState.message,
    backgroundColor: alertState.backgroundColor,
    severity: alertState.severity,
  };

  return (
    <AlertContext.Provider value={contexValue}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
