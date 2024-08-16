/* eslint-disable */
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UsersService from "../../services/servicesUsers";
import Spinner from "../../components/spiner/spiner";
import Error from "../../components/spiner/spiner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let navigate = useNavigate();
  const userService = new UsersService();

  const onError = (err) => {
    console.error(err);
    setError(true);
    setLoading(false);
  };

  const onPressSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    userService
      .signup(name, email, password, passwordConfirm)
      .then((res) => {
        navigate("/login");
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

  loading ? <Spinner /> : null;

  error ? <Error /> : null;

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
            Password
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
