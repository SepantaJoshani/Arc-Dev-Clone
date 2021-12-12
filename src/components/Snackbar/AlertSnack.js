import { Snackbar } from "@material-ui/core";
import React from "react";
import  MuiAlert  from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const AlertSnack = ({
  open,
  backgroundColor,
  onClose,
  severity,
  alertMessage,
}) => {
  return (
    <Snackbar
      open={open}
      message={alertMessage}
      ContentProps={{
        style: {
          background: backgroundColor,
        },
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={onClose}
      autoHideDuration={2000}
    >
      <Alert onClose={onClose} severity={severity}>
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};

export default React.memo(AlertSnack);
