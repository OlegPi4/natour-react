/* eslint-disable */
import React, { Component } from "react";
import ToursService from "../../services/servicesTours";
import Tour from "../tour/tour";

class Tours extends Component {
  state = {
    tours: [],
  };

  toursService = new ToursService();

  getTours = () => {
    this.toursService.getAllTours().then((res) =>
      this.setState({
        tours: res.data.data,
      })
    );
  };

  componentDidMount() {
    this.getTours();
  }
  render() {
    const { tours } = this.state;
    const elements = tours.map((item) => {
      return <Tour key={item._id} item={item} />;
    });
    return <div className="card-container">{elements}</div>;
  }
}

export default Tours;
