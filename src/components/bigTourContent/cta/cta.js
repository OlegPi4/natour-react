/* eslint-disable */
import { Component } from "react";
import { Link } from "react-router-dom";

class Cta extends Component {
  state = {
    user: null,
  };

  getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.setState({ user });
    } else {
      this.setState({ user: null });
    }
  };
  updateUser = () => {
    setInterval(() => this.getUser(), 1500);
  };

  componentDidMount() {
    this.getUser();
    this.updateUser();
  }

  componentWillUnmount() {
    clearInterval(this.updateUser);
  }
  render() {
    const { tour } = this.props;

    return (
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <img
          className="cta__img cta__img--1"
          src={`/img/tours/${tour.images[1]}`}
          alt="Tour picture"
        />
        <img
          className="cta__img cta__img--2"
          src={`/img/tours/${tour.images[2]}`}
          alt="Tour picture"
        />
        <div className="cta__content">
          <h2 className="heading-secondary"> What are you waiting for? </h2>
          <p className="cta__text">
            {" "}
            {tour.duration} days. 1 adventure. Infinite memories. Make it yours
            today!`{" "}
          </p>
          {this.state.user ? (
            <button
              className="btn btn--green span-all-rows"
              id="book-tour"
              data-tour-id={`${tour.id}`}
            >
              {" "}
              Book tour now!{" "}
            </button>
          ) : (
            <Link className="btn btn--green span-all-rows" to="/login">
              {" "}
              Log in to book tour{" "}
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Cta;
