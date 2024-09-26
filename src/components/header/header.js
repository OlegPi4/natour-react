/* eslint-disable */
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UsersService from "../../services/servicesUsers";
import Links from "./links/links";

const Header = () => {
  const [user, setUser] = useState(null);

  const userService = new UsersService();

  const getUser = () => {
    const us = JSON.parse(localStorage.getItem("user"));
    if (us) {
      setUser(us);
    }
  };

  const updateUser = () => {
    setInterval(() => getUser(), 1500);
  };

  useEffect(() => {
    getUser();
    updateUser();

    return () => {
      clearInterval(updateUser);
    };
  }, []);

  const onLogout = () => {
    userService.logout().then((res) => {
      if (res == "success") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
      }
    });
  };

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link className="nav__el" to="/">
          All tours
        </Link>
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo"></img>
      </div>

      <nav className="nav  nav--user">
        <Links user={user} onLogout={onLogout} />
      </nav>
    </header>
  );
};

export default Header;
