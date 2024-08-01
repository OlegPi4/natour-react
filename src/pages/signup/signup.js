/* eslint-disable */
import * as React from "react";
import { Component } from "react";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  render() {
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
            />
          </div>

          <div className="form__group">
            <button className="btn btn--green btn--save-signup">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
