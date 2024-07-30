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
      <div>
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
