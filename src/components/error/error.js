/* eslint-disable */

import "./error.css";

const Error = ({ errorMessage }) => {
  return (
    <div className="message">
      <div
        className="message__box"
        style={{ backgroundColor: "#ccbbaa", padding: "10px 10px" }}
      >
        <div className="message__title">
          {errorMessage} <br></br>
          An error occurred, please try again later!{" "}
        </div>
      </div>
    </div>
  );
};

export default Error;
