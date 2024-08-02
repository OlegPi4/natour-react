const Details = ({ tour }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const descr1 = tour.startDates[0].slice(0, 10);
  //const descr1 = tour.startDates[0].toLocaleString("en-us", options);
  let descr4 = `${tour.ratingsAverage} / ${tour.ratingsQuantity}`;

  const details = [
    {
      icon: "calendar",
      lable: "Next data",
      descr: descr1,
    },
    {
      icon: "trending-up",
      lable: "Difficulty",
      descr: tour.difficulty,
    },
    {
      icon: "user",
      lable: "Participiants",
      descr: tour.maxGroupSize,
    },
    {
      icon: "star",
      lable: "Rating",
      descr: descr4,
    },
  ];

  const element = details.map((item, i) => {
    return (
      <div className="overview-box__detail" key={i}>
        <svg className="overview-box__icon">
          <use xlinkHref={`/img/icons.svg#icon-${item.icon}`}></use>
        </svg>
        <span className="overview-box__label">{item.lable}</span>
        <span className="overview-box__text">{item.descr}</span>
      </div>
    );
  });
  return <>{element}</>;
};

export default Details;
