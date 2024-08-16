/* eslint-disable */
import * as React from "react";
import { useState, useEffect } from "react";

import UsersService from "../../services/servicesUsers";
import Spinner from "../../components/spiner/spiner";
import Error from "../../components/error/error";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const userService = new UsersService();

  const onError = (err) => {
    console.error(err);
    setError(true);
    setLoading(false);
  };

  const onValueChange = (event) => {
    const { name, value } = event.target;

    if (name == "email") {
      setEmail(value);
    }
  };

  const onPressConfirm = (e) => {
    e.preventDefault();
    setLoading(true);

    userService
      .forgot(email)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => onError(err));

    setEmail("");
    setLoading(false);
  };

  useEffect(() => {
    // Check if user is already logged in
    document.title = "Natour | forgot password";
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Error />;
  }
  return (
    <div className="login-form">
      <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
      <form className="form form--login">
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            className="form__input"
            id="email"
            type="email"
            placeholder="you@example.com"
            required="required"
            name="email"
            value={email}
            onChange={onValueChange}
          />
        </div>

        <div className="form__group">
          <button className="btn btn--green" onClick={onPressConfirm}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
