/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import NavUser from "./navuser/navuser";
import NavAdmin from "./navAdmin/navAdmin";
import FormUserPage from "./formUserPage/formUserPage";

const Me = () => {
  const [user, setUser] = useState("");

  function getUser(name) {
    let us = JSON.parse(localStorage.getItem("user"));

    if (!us) {
      window.location.href = "/login";
      return;
    }
    if (us.name == name) return;
    setUser(us);
  }

  function updateUser(name) {
    setInterval(() => getUser(name), 1000);
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
    document.title = "Natour | me";
    updateUser(user.name);
    return () => {
      clearInterval(updateUser);
    };
  }, []);

  return (
    <div className="user-view">
      <nav className="user-view__menu">
        <ul className="side-nav">
          <NavUser />
        </ul>

        {user.role === "admin" ? <NavAdmin /> : null}
      </nav>
      <div className="user-view__content">
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">
            {" "}
            Your account settings{" "}
          </h2>
          <FormUserPage currentUser={user} />
        </div>
      </div>
    </div>
  );
};
export default Me;
