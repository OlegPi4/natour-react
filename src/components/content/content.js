/* eslint-disable */
import React, { Component } from "react";

import Tours from "../tours/tours";

class Content extends Component {
  state = {};

  getParams = () => {};

  componentDidMount() {
    this.getParams();
  }

  render() {
    return (
      <main className="main">
        <Tours />
      </main>
    );
  }
}
export default Content;
