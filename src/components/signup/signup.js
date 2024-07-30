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
      <div class="login-form">
        <h2 class="heading-secondary ma-bt-lg">Sign up account</h2>
        <form class="form form--signup">
          <div class="form__group">
            <label class="form__label" for="name">
              {" "}
              Name{" "}
            </label>
            <input
              class="form__input"
              id="name"
              type="text"
              placeholder="Your name"
              required="required"
            />
          </div>
          <div class="form__group">
            <label class="form__label" for="email">
              Email address
            </label>
            <input
              class="form__input"
              id="email"
              type="email"
              placeholder="you@example.com"
              required="required"
            />
          </div>

          <div class="form__group">
            <label class="form__label" for="password">
              Password
            </label>
            <input
              class="form__input"
              id="password"
              type="password"
              placeholder="••••••••"
              required="required"
              minlength="8"
            />
          </div>

          <div class="form__group ma-bt-md">
            <label class="form__label" for="passwordConfirm">
              Confirm password
            </label>
            <input
              class="form__input"
              id="passwordConfirm"
              type="password"
              placeholder="••••••••"
              required="required"
              minlength="8"
            />
          </div>

          <div class="form__group">
            <button class="btn btn--green btn--save-signup">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
