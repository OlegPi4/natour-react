import { useState, useCallback } from "react";
import axios from "axios";
import { showAlert } from "../services/alerts";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      method = "GET",
      url,
      data = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);

      try {
        const res = await axios({ method, url, data, headers });

        if (res.data.status === "success") {
          setLoading(false);
          window.setTimeout(() => {
            showAlert("success", "Connection successful!");
          }, 1500);

          return res.data;
        }
      } catch (error) {
        setLoading(false);
        showAlert("error", error.res);
        window.setTimeout(() => {}, 1500);
        setError(true);
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
};

export default useHttp;
