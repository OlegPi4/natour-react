/* eslint-disable */
import { useEffect } from "react";

import PropTypes from "prop-types";
import useToursService from "../../services/servicesTours";
import Spinner from "../../components/spiner/spiner";
import Error from "../../components/error/error";
import Gides from "./gides/gides";
import Details from "./details/details";
import MyMap from "./map/map";
import Reviews from "./reviews/reviews";
import Cta from "./cta/cta";

const BigTourContent = (props) => {
  const { tours, loading, error, errorMessage, clearError, getOneTour } =
    useToursService();

  const getTour = () => {
    let id = props.id;
    getOneTour(id);
  };

  useEffect(() => {
    clearError();
    getTour();
    document.title = "Natour   |   tour";
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Error errorMessage={errorMessage} />;
  }
  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay"> &nbsp;</div>
          <img
            className="header__hero-img"
            src={`/img/tours/${tours.imageCover}`}
            alt={tours.name}
          />
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">
            <span> {`${tours.name} tour`} </span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="/img/icons.svg#icon-clock"></use>
              </svg>
              <span className="heading-box__text">`{tours.duration} days`</span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="/img/icons.svg#icon-map-pin"> </use>
              </svg>
              <span className="heading-box__text">
                {" "}
                {tours.startLocation.description}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg"> Quick facts </h2>
              <Details tour={tours} />
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides </h2>
              <Gides persons={tours.guides} />
            </div>
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">
            {" "}
            `About {tours.name} tour`{" "}
          </h2>
          {tours.description.split("\n").map((item, i) => {
            return (
              <p key={i} className="description__text">
                {" "}
                {item}{" "}
              </p>
            );
          })}
        </div>
      </section>
      <section className="section-pictures">
        {tours.images.map((item, i) => {
          return (
            <div key={i} className="picture-box">
              <img
                src={`/img/tours/${item}`}
                alt={`The Park Camper Tour ${i + 1}`}
                className={`picture-box__img picture-box__img--${i + 1}`}
              />
            </div>
          );
        })}
      </section>
      <section className="section-map">
        <MyMap tours={tours} />
      </section>
      <section className="section-reviews">
        <div className="reviews">
          <Reviews reviews={tours.reviews} />
        </div>
      </section>
      <section className="section-cta">
        <Cta tour={tours} />
      </section>
    </>
  );
};
BigTourContent.propTypes = {
  id: PropTypes.string.isRequired,
  slug: PropTypes.string,
};
export default BigTourContent;
