/* eslint-disable */
import React, { Component } from "react";
import ToursService from "../../services/servicesTours";
import Tours from "../tours/tours";

class Content extends Component {
  state = {
    tours: [],
  };

  toursService = new ToursService();

  getParams = () => {};

  getTours = () => {
    this.toursService.getAllTours().then((res) =>
      this.setState({
        tours: res.data.data,
      })
    );
  };

  componentDidMount() {
    this.getTours();
    this.getParams();
  }

  render() {
    const { tours } = this.state;
    return (
      <main className="main">
        <div className="card-container">
          <Tours tours={tours} />
        </div>
      </main>
    );
  }
}
export default Content;
