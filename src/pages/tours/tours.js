/* eslint-disable */
import React, { useState, useEffect } from "react";
import ToursService from "../../services/servicesTours";
import Tour from "../../components/tour/tour";
import Spinner from "../../components/spiner/spiner";
import Error from "../../components/error/error";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const toursService = new ToursService();

  const onToursLoaded = (tours) => {
    console.log("onToursLoaded");
    setTours(tours);
    setLoading(false);
  };

  const onError = (err) => {
    console.log("onError");
    console.error(err);
    setError(true);
    setLoading(false);
  };

  const getTours = () => {
    console.log("getTour");
    toursService
      .getAllTours()
      .then((res) => onToursLoaded(res.data.data))
      .catch((err) => onError(err));
  };

  useEffect(() => {
    console.log("useEffect");
    getTours();
    document.title = "Natour   |   tours";
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }
  const elements = tours.map((item) => {
    return <Tour key={item._id} item={item} />;
  });
  return <div className="card-container">{elements}</div>;
};

export default Tours;
