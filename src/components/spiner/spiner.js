/* eslint-disable */
import img from "./Spinner-3.gif";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="message">
      <div className="message__box">
        <div className="message__title"> Loading ... </div>
      </div>
      <img
        style={{
          display: "block",
          width: "90px",
          height: "90px",
          objectFit: "contain",
          margin: "50 auto",
        }}
        src={img}
        alt="image error"
      />
    </div>
  );
};

export default Spinner;
