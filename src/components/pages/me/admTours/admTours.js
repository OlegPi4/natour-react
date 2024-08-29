import { useEffect } from "react";
import { Link } from "react-router-dom";
import useToursService from "../../../../services/servicesTours";
import Spinner from "../../../spiner/spiner";
import Error from "../../../error/error";

const AdmTours = () => {
  const { tours, loading, error, errorMessage, clearError, getAllTours } =
    useToursService();

  useEffect(() => {
    clearError(); // Fetch all tours from the API
    getAllTours();
    document.title = "Natour   |   Admin-Tours"; // Update the tours state with the fetched data
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Error errorMessage={errorMessage} />;
  }
  return (
    <div className="user-view__form-container">
      <h1
        style={{
          fontSize: "24px",
          color: "#55c57a",
          marginBottom: "20px",
        }}
      >
        Manage Tours
      </h1>
      {tours.map((tour) => {
        return (
          <div key={tour._id} className="side-nav">
            <Link to={tour.id} style={{ color: "#664488", paddingLeft: "0" }}>
              {tour.name}
            </Link>

            {/* Add buttons for editing and deleting each tour */}
          </div>
        );
      })}
      <div className="side-nav">
        <Link to="add" style={{ color: "#55c57a", paddingLeft: "0" }}>
          Add tour
        </Link>
      </div>

      {/* Add your code here */}
    </div>
  );
};

export default AdmTours;
