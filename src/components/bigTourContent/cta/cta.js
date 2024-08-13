/* eslint-disable */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const userLocalStorsge = JSON.parse(localStorage.getItem("user"));

const Cta = ({ tour }) => {
  const [user, setUser] = useState(userLocalStorsge);

  function getUser() {
    let us = JSON.parse(localStorage.getItem("user"));

    setUser(us);
  }

  function updateUser() {
    setInterval(() => getUser(), 1500);
  }

  useEffect(() => {
    updateUser();
    return () => {
      clearInterval(updateUser);
    };
  }, []);

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
        {user ? (
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
};

export default Cta;
