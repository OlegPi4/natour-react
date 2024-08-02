/* eslint-disable */

const Gides = (props) => {
  const gides = props.persons.map((item, i) => {
    const guide = item;

    const role = guide.role == "lead-guide" ? "Leade guide" : "Tour guide";
    return (
      <div className="overview-box__detail" key={i}>
        <img
          className="overview-box__img"
          src={`/img/users/${guide.photo}`}
          alt={guide.name}
        />

        <span className="overview-box__label"> {role} </span>
        <span className="overview-box__text"> {guide.name} </span>
      </div>
    );
  });

  return <>{gides}</>;
};

export default Gides;
