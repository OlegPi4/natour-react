/* eslint-disable */

const Tours = ({ tours }) => {
  const elements = tours.map((item) => {
    return (
      <div className="card" key={item._id}>
        <div className="card__header">
          <div className="card__picture">
            <div className="card__picture-overlay">
              &nbsp;
              <img
                className="card__picture-img"
                src={`/img/tours/${item.imageCover}`}
                alt={item.name}
              />
            </div>
          </div>
          <h3 className="heading-tertirary">
            <span>{item.name} </span>
          </h3>
        </div>
        <div className="card__details">
          <h4 className="card__sub-heading">
            {item.difficulty} {item.duration}-day tour
          </h4>
          <p className="card__text">{item.summary}</p>
          <div className="card__data">
            <svg className="card__icon" viewBox="0 0 32 32">
              <use xlinkHref="/img/icons.svg#icon-map-pin" />
            </svg>
            <span>{item.startLocation.description}</span>
          </div>
          <div className="card__data">
            <svg className="card__icon" viewBox="0 0 32 32">
              <use xlinkHref="/img/icons.svg#icon-calendar" />
            </svg>
            <span>
              {new Date(item.startDates[0]).toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="card__data">
            <svg className="card__icon" viewBox="0 0 32 32">
              <use xlinkHref="/img/icons.svg#icon-user" />
            </svg>
            <span>{item.maxGroupSize} people</span>
          </div>
          <div className="card__data">
            <svg className="card__icon" viewBox="0 0 32 32">
              <use xlinkHref="/img/icons.svg#icon-flag" />
            </svg>
            <span>{item.locations.length} stops</span>
          </div>
        </div>
        <div className="card__footer">
          <p>
            <span className="card__footer-value"> {item.price} </span>
            <span>|</span>
            <span className="card__footer-text"> per person </span>
          </p>
          <p className="card__ratings">
            <span className="card__footer-value"> {item.ratingsAverage} </span>
            <span>| </span>
            <span className="card__footer-text">
              {" "}
              {`rating (${item.ratingsQuantity})`}{" "}
            </span>
          </p>
          <a className="btn btn--green btn--small" href={`/tour/${item.slug}`}>
            {" "}
            Details{" "}
          </a>
        </div>
      </div>
    );
  });
  return <>{elements}</>;
};

export default Tours;
