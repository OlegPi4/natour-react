/* eslint-disable */

import { useParams } from "react-router-dom";
import BigTourContent from "../../components/bigTourContent/bigTourContent";
const BibTour = () => {
  const { slug, id } = useParams();

  return (
    <>
      <BigTourContent slug={slug} id={id} />
    </>
  );
};
export default BibTour;
