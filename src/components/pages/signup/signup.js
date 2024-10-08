/* eslint-disable */
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UsersService from "../../../services/servicesUsers";
import Spinner from "../../spiner/spiner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  const userService = new UsersService();

  const onError = (err) => {
    setLoading(false);
  };

  const onPressSignup = (e) => {
    setLoading(true);
    e.preventDefault();

    userService
      .signup(name, email, password, passwordConfirm)
      .then((res) => {
        if (!res.status) return;
        if (res.status === "success") {
          navigate("/login");
        }
      })
      .catch((err) => onError(err));

    setName("");
    setPassword("");
    setLoading(false);
    setEmail("");
    setPasswordConfirm("");
  };

  useEffect(() => {
    document.title = "Natour | signup";
  }, []);

  const Spin = loading ? <Spinner /> : null;
  {
    Spin;
  }
  return (
    <div className="login-form">
      <h2 className="heading-secondary ma-bt-lg">Sign up account</h2>
      <form className="form form--signup">
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            {" "}
            Name{" "}
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            placeholder="Your name"
            required="required"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="password">
            Password{" "}
            <span style={{ fontSize: "12px" }}> / min length - 6 </span>
          </label>
          <input
            className="form__input"
            id="password"
            type="password"
            placeholder="••••••••"
            required="required"
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="passwordConfirm">
            Confirm password
          </label>
          <input
            className="form__input"
            id="passwordConfirm"
            type="password"
            placeholder="••••••••"
            required="required"
            minLength="8"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <div className="form__group">
          <button
            className="btn btn--green btn--save-signup"
            onClick={onPressSignup}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
