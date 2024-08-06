/* eslint-disable */
import PropTypes from "prop-types";
import Rating from "./rating/rating";

const Reviews = ({ reviews }) => {
  const revs = reviews.map((item, i) => {
    return (
      <div className="reviews__card" key={i}>
        <div className="reviews__avatar">
          <img
            className="reviews__avatar-img"
            src={`/img/users/${item.user.photo}`}
            alt={item.user.name}
          />
          <h6 className="reviews__user">{item.user.name}</h6>
        </div>
        <p className="reviews__text">{item.review}</p>
        <div className="reviews__rating">
          <Rating rating={item.rating} />
        </div>
      </div>
    );
  });

  return <>{revs}</>;
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;
