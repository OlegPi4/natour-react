/* eslint-disable */
import { Component } from "react";
import ToursService from "../../services/servicesTours";

import Spinner from "../../components/spiner/spiner";
import Error from "../../components/error/error";
import Gides from "../gides/gides";

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

                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref={`/img/icons.svg#icon-calendar`}></use>
                  </svg>
                  <span className="overview-box__label"> Next date </span>
                  <span className="overview-box__text">
                    {" "}
                    {tour.startDates[0].slice(0, 10)}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref={`/img/icons.svg#icon-trending-up`}></use>
                  </svg>
                  <span className="overview-box__label"> Difficulty </span>
                  <span className="overview-box__text"> {tour.difficulty}</span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref={`/img/icons.svg#icon-user`}></use>
                  </svg>
                  <span className="overview-box__label"> Participiants </span>
                  <span className="overview-box__text">
                    {" "}
                    {tour.maxGroupSize}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref={`/img/icons.svg#icon-star`}></use>
                  </svg>
                  <span className="overview-box__label"> Rating </span>
                  <span className="overview-box__text">
                    {" "}
                    {tour.ratingsAverage} / {tour.ratingsQuantity}
                  </span>
                </div>
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
              `About ${tour.name} tour`{" "}
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
      </>
    );
  }
}

export default BigTourContent;
