/* eslint-disable */
import * as React from "react";

import { Link } from "react-router-dom";

const Links = ({ user, onLogout }) => {
  if (!user) {
    return <NoUserLink />;
  }
  return (
    <>
      <button className="nav__el nav__el--logout" onClick={onLogout}>
        {" "}
        Log out{" "}
      </button>
      <Link className="nav__el" to="/me">
        <img
          className="nav__user-img"
          src={`/img/users/${user.photo}`}
          alt={`Photo of ${user.name}`}
        />
        <span> {user.name.split(" ")[0]} </span>
      </Link>
    </>
  );
};

const NoUserLink = () => {
  return (
    <>
      <Link className="nav__el" to="/login">
        Log in
      </Link>
      <Link className="nav__el nav__el--cta " to="/signup">
        Sign up
      </Link>
    </>
  );
};

export default Links;
