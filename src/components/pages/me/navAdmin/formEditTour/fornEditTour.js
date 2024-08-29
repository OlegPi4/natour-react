import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormEditAdd from "./formEditAdd";
import useToursService from "../../../../../services/servicesTours";
import Spinner from "../../../../spiner/spiner";
import Error from "../../../../error/error";

const FormEditTour = () => {
  const { id } = useParams();
  const {
    tours,
    loading,
    error,
    errorMessage,
    clearError,
    getOneTour,
    setLoading,
  } = useToursService();

  useEffect(() => {
    clearError();
    if (id.length >= 5) {
      getOneTour(id);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Error errorMessage={errorMessage} />;
  }
  return (
    <>
      <FormEditAdd tour={tours} />
    </>
  );
};

export default FormEditTour;
