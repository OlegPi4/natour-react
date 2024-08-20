/* eslint-disable */
import { useState, useEffect } from "react";

const FormUserSetup = () => {
  const [user, setUser] = useState("");

  function getUser(name) {
    let us = JSON.parse(localStorage.getItem("user"));

    if (!us) {
      window.location.href = "/login";
      return;
    }
    if (us.name === name) return;
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
    document.title = "Natour | edit-profile  ";
    updateUser(user.name);
    return () => {
      clearInterval(updateUser);
    };
  }, []);

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md"> Your account settings </h2>
      <form
        className="form form-user-data"
        action="/submit-user-data"
        method="POST"
      >
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name{" "}
          </label>
          <input
            id="name"
            className="form__input"
            type="text"
            placeholder={user.name}
            required="required"
            name="name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className="form__input"
            type="email"
            placeholder={user.email}
            required="required"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default FormUserSetup;
