import axios from "axios";
import { useState, useCallback } from "react";

const useToursService = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const _apiBase = "https://natour-red.vercel.app/api/v1";

  const getResours = useCallback(async (url) => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}`);
      setTours(res.data.data.data);
    } catch (err) {
      console.log(err);
      setError(true);
      setErrorMessage(err.message);
      //throw new Error(`Error fetching tours ${url}, status: ${err}`);
    }
    setLoading(false);
  }, []);

  const getAllTours = () => {
    return getResours(`${_apiBase}/tours`);
  };

  const getOneTour = (id) => {
    return getResours(`${_apiBase}/tours/${id}`);
  };

  const clearError = () => {
    setError(false);
    setErrorMessage(null);
  };

  return {
    tours,
    loading,
    error,
    errorMessage,
    getAllTours,
    getOneTour,
    clearError,
  };
};

export default useToursService;
