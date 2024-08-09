import * as React from "react";
import { Component } from "react";

class Me extends Component {
  componentDidMount() {
    document.title = "Natour | me";
  }

  render() {
    return (
      <div>
        <h1>Me</h1>
      </div>
    );
  }
}
export default Me;
