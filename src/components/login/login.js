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
      <div class="login-form">
        <h2 class="heading-secondary ma-bt-lg">Log into your account</h2>
        <form class="form form--login">
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
          <div class="form__group ma-bt-md">
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
            <a class="link--forgot-password" href="/forgot">
              forgot password
            </a>
          </div>
          <div class="form__group">
            <button class="btn btn--green">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
