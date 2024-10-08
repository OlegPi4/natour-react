/* eslint-disable */
import React, { useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import useToursService from "../../../services/servicesTours";
import Tour from "../../tour/tour";
import Spinner from "../../spiner/spiner";
import Error from "../../error/error";

const Tours = memo(() => {
  const { tours, loading, error, errorMessage, clearError, getAllTours } =
    useToursService();

  const getTours = () => {
    getAllTours();
  };

  useEffect(() => {
    clearError();
    getTours();
    document.title = "Natour   |   tours";
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
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
});

export default Tours;
