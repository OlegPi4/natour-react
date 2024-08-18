import { Link, useNavigate } from "react-router-dom";

import "./notfound.css";

function Notfound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="message">
        <h2 className="message__title">This page does not exist</h2>
        <div className="message-buttun">
          <Link className="btn btn--green btn--small " to={navigate(-1)}>
            {" "}
            RETURN{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Notfound;
