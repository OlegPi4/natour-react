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
          showAlert("success", "Connection successful!");
          window.setTimeout(() => {}, 1500);
          setLoading(false);

          return res.data;
        }
      } catch (error) {
        setLoading(false);
        showAlert("error", error.res.data);
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
