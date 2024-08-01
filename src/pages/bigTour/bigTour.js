import { useParams } from "react-router-dom";

const BibTour = () => {
  const { id } = useParams();

  return (
    <>
      <h2>BigTour</h2>
      <p>Tour ID: {id}</p>
    </>
  );
};
export default BibTour;
