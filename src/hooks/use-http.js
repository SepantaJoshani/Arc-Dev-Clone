import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { AlertContext } from "../context/alert-context";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const alertCtx = useContext(AlertContext);
  const { successHandler, errorHandler } = alertCtx;

  const sendHttp = useCallback(
    (url, body, extra) => {
      setLoading(true);
      axios
        .post(url, body)
        .then((res) => {
          setLoading(false);
          successHandler();
          extra();
        })
        .catch((err) => {
          setLoading(false);
          errorHandler();
        });
    },
    [successHandler, errorHandler]
  );

  return {
    sendHttp,
    loading,
  };
};
