/* eslint-disable */
import React, { useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import useToursService from "../../../services/servicesTours";
import Tour from "../../tour/tour";
import Spinner from "../../spiner/spiner";
import Error from "../../error/error";

const Tours = () => {
  const { tours, errorMessage, clearError, getAllTours, process } =
    useToursService();

  const getTours = useCallback(() => {
    getAllTours();
  }, [tours]);

  useEffect(() => {
    clearError();
    getTours();
    document.title = "Natour   |   tours";
  }, []);

  if (process === "loading") {
    return <Spinner />;
  }
  if (process === "error") {
    return <Error errorMessage={errorMessage} />;
  }
  const elements = tours.map((item) => {
    return <Tour key={item._id} item={item} />;
  });
  return (
    <>
      <Helmet>
        <title>Natour | adventurous tours</title>
        <meta
          name="description"
          content="Discover the hidden gems of our beautiful and adventurous tours."
        />
      </Helmet>
      <div className="card-container">{elements}</div>
    </>
  );
};

export default Tours;
