/* eslint-disable */
import * as React from "react";
import { useState, useEffect } from "react";

import UsersService from "../../services/servicesUsers";
import Spinner from "../../components/spiner/spiner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState("");

  const userService = new UsersService();

  const onValueChange = (event) => {
    const { name, value } = event.target;

    if (name == "username") {
      setUsername(value);
    }
    if (name == "password") {
      setPassword(value);
    }
  };

  const onPressLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    userService
      .login(username, password)
      .then((res) => {
        if (res) {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => this.onError(err));

    setUsername("");
    setPassword("");
    setLoading(false);
  };

  useEffect(() => {
    // Check if user is already logged in
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
    document.title = "Natour | login";
  }, []);

  if (loading) {
    return <Spinner />;
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
            name="username"
            value={username}
            onChange={onValueChange}
          />
        </div>
        <div className="form__group ma-bt-md">
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
            name="password"
            value={password}
            onChange={onValueChange}
          />
          <a className="link--forgot-password" href="/forgot">
            forgot password
          </a>
        </div>
        <div className="form__group">
          <button className="btn btn--green" onClick={onPressLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
