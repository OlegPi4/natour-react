const Rating = ({ rating }) => {
  return (
    <>
      <svg
        className={`reviews__star reviews__star--${
          rating >= 1 ? "active" : "inactive"
        }`}
      >
        <use xlinkHref="/img/icons.svg#icon-star"></use>
      </svg>
      <svg
        className={`reviews__star reviews__star--${
          rating >= 2 ? "active" : "inactive"
        }`}
      >
        <use xlinkHref="/img/icons.svg#icon-star"></use>
      </svg>
      <svg
        className={`reviews__star reviews__star--${
          rating >= 3 ? "active" : "inactive"
        }`}
      >
        <use xlinkHref="/img/icons.svg#icon-star"></use>
      </svg>
      <svg
        className={`reviews__star reviews__star--${
          rating >= 4 ? "active" : "inactive"
        }`}
      >
        <use xlinkHref="/img/icons.svg#icon-star"></use>
      </svg>
      <svg
        className={`reviews__star reviews__star--${
          rating >= 5 ? "active" : "inactive"
        }`}
      >
        <use xlinkHref="/img/icons.svg#icon-star"></use>
      </svg>
    </>
  );
};

export default Rating;
