/* eslint-disable */
import * as React from "react";
import { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
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
            />
            <a className="link--forgot-password" href="/forgot">
              forgot password
            </a>
          </div>
          <div className="form__group">
            <button className="btn btn--green">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
