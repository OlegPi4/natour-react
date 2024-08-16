/* eslint-disable */
import * as React from "react";
import { useState, useEffect } from "react";

import UsersService from "../../services/servicesUsers";
import Spinner from "../../components/spiner/spiner";
import Error from "../../components/error/error";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const userService = new UsersService();

  const onError = (err) => {
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
        if (res.status === "success") {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 5000);
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
  }
  return (
    <>
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Forgot password</h2>
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

      {show ? (
        <div className="wrapp-alert">
          <h2 className="alert alert--success">
            An email has been sent to your email address, please confirm your
            password reset!
          </h2>
        </div>
      ) : null}
    </>
  );
};

export default ForgotPassword;
