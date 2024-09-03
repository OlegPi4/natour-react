import axios from "axios";
import { useState, useCallback } from "react";

const useToursService = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [process, setProcess] = useState("waiting");

  const _apiBase = "https://natour-red.vercel.app/api/v1";

  const getResours = useCallback(async (url) => {
    try {
      setLoading(true);
      setProcess("loading");
      const res = await axios.get(`${url}`);
      setTours(res.data.data.data);
      setProcess("confirmed");
    } catch (err) {
      console.log(err);
      setError(true);
      setErrorMessage(err.message);
      setProcess("error");
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
    setProcess("loading");
  };

  return {
    tours,
    loading,
    error,
    errorMessage,
    getAllTours,
    getOneTour,
    clearError,
    setLoading,
    process,
  };
};

export default useToursService;
