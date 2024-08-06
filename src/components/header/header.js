/* eslint-disable */
import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import UsersService from "../../services/servicesUsers";
import Links from "./links/links";

class Header extends Component {
  state = {
    user: null,
  };

  userService = new UsersService();

  componentDidMount() {
    // Check if user is already logged in
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.setState({ user });
    }
  }

  onLogout = () => {
    this.userService.logout().then((res) => {
      console.log(`User logged out successfully status ${res}`);
      localStorage.removeItem("user");
      this.setState({ user: null });
    });
  };

  render() {
    return (
      <header className="header">
        <nav className="nav nav--tours">
          <Link className="nav__el" to="/">
            All tours
          </Link>
        </nav>
        <div className="header__logo">
          <img src="/img/logo-white.png" alt="Natours logo"></img>
        </div>

        <nav className="nav  nav--user">
          <Links user={this.state.user} onLogout={this.onLogout} />
        </nav>
      </header>
    );
  }
}

export default Header;
