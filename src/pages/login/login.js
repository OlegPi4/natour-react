/* eslint-disable */
import * as React from "react";
import { Component } from "react";

import UsersService from "../../services/servicesUsers";
import Spinner from "../../components/spiner/spiner";

class Login extends Component {
  state = {
    username: "",
    password: "",
    user: null,
    loading: false,
  };

  userService = new UsersService();

  onValueChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onError = (err) => {
    console.error(err);
    this.setState({ error: true, loading: false });
  };

  onPressLogin = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.userService
      .login(this.state.username, this.state.password)
      .then((res) => {
        this.setState({ user: res.data.user });
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => this.onError(err));

    this.setState({ username: "", password: "" });
    this.setState({ loading: false });
  };

  componentDidMount() {
    // Check if user is already logged in
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.setState({ user });
    }
  }

  render() {
    const { loading, user } = this.state;
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
              value={this.state.username}
              onChange={this.onValueChange}
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
              value={this.state.password}
              onChange={this.onValueChange}
            />
            <a className="link--forgot-password" href="/forgot">
              forgot password
            </a>
          </div>
          <div className="form__group">
            <button className="btn btn--green" onClick={this.onPressLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
