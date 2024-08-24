/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import NavUser from "./navuser/navuser";
import NavAdmin from "./navAdmin/navAdmin";

const Me = () => {
  const [user, setUser] = useState("");

  function getUser() {
    let us = JSON.parse(localStorage.getItem("user"));

    if (!us) {
      window.location.href = "/login";
      return;
    }
    if (us.name == user.name) return;
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
    <>
      <nav className="user-view__menu">
        <ul className="side-nav">
          <NavUser />
        </ul>

        {user.role === "admin" ? <NavAdmin /> : null}
      </nav>
    </>
  );
};
export default Me;
