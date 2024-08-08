/* eslint-disable */
import { Component } from "react";
import PropTypes from "prop-types";
import ToursService from "../../services/servicesTours";

import Spinner from "../../components/spiner/spiner";
import Error from "../../components/error/error";
import Gides from "./gides/gides";
import Details from "./details/details";
import MyMap from "./map/map";
import Reviews from "./reviews/reviews";
import Cta from "./cta/cta";

class BigTourContent extends Component {
  state = {
    loading: true,
    tour: {},
    error: false,
  };

  toursService = new ToursService();

  onTourLoaded = (tour) => {
    this.setState({ tour, loading: false });
  };

  onError = (err) => {
    console.error(err);
    this.setState({ error: true, loading: false });
  };

  getTour = () => {
    let id = this.props.id;
    this.toursService
      .getOneTour(id)
      .then((res) => this.onTourLoaded(res.data.data))
      .catch((err) => this.onError(err));
  };

  componentDidMount() {
    this.getTour();
  }

  render() {
    const { tour, loading, error } = this.state;

    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <Error />;
    }
    return (
      <>
        <section className="section-header">
          <div className="header__hero">
            <div className="header__hero-overlay"> &nbsp;</div>
            <img
              className="header__hero-img"
              src={`/img/tours/${tour.imageCover}`}
              alt={tour.name}
            />
          </div>
          <div className="heading-box">
            <h1 className="heading-primary">
              <span> {`${tour.name} tour`} </span>
            </h1>
            <div className="heading-box__group">
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-clock"></use>
                </svg>
                <span className="heading-box__text">
                  `${tour.duration} days`
                </span>
              </div>
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-map-pin"> </use>
                </svg>
                <span className="heading-box__text">
                  {" "}
                  {tour.startLocation.description}
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
                <Details tour={tour} />
              </div>

              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">
                  Your tour guides{" "}
                </h2>
                <Gides persons={tour.guides} />
              </div>
            </div>
          </div>
          <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">
              {" "}
              `About {tour.name} tour`{" "}
            </h2>
            {tour.description.split("\n").map((item, i) => {
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
          {tour.images.map((item, i) => {
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
          <div id="map">
            <MyMap locations={tour.locations} />
          </div>
        </section>
        <section className="section-reviews">
          <div className="reviews">
            <Reviews reviews={tour.reviews} />
          </div>
        </section>
        <section className="section-cta">
          <Cta tour={tour} />
        </section>
      </>
    );
  }
}
BigTourContent.propTypes = {
  id: PropTypes.string.isRequired,
  slug: PropTypes.string,
};
export default BigTourContent;
