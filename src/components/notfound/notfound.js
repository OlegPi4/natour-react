import { Link } from "react-router-dom";

import "./notfound.css";

import Spinner from "../spiner/spiner";
function Notfound() {
  return (
    <>
      <div className="message">
        <h2 className="message__title">The page is not found</h2>
        <div className="message-buttun">
          <Link className="btn btn--green btn--small " to="/">
            {" "}
            RETURN{" "}
          </Link>
        </div>
      </div>
      <Spinner />
    </>
  );
}

export default Notfound;
