/* eslint-disable */
import React, { Component } from "react";
import ToursService from "../../services/servicesTours";
import Tour from "../../components/tour/tour";
import Spinner from "../../components/spiner/spiner";
import Error from "../../components/error/error";

class Tours extends Component {
  state = {
    tours: [],
    loading: true,
    error: false,
  };

  toursService = new ToursService();

  onToursLoaded = (tours) => {
    this.setState({ tours, loading: false });
  };

  onError = (err) => {
    console.error(err);
    this.setState({ error: true, loading: false });
  };

  getTours = () => {
    this.toursService
      .getAllTours()
      .then((res) => this.onToursLoaded(res.data.data))
      .catch((err) => this.onError(err));
  };

  componentDidMount() {
    this.getTours();
  }
  render() {
    const { tours, loading, error } = this.state;

    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <Error />;
    }
    const elements = tours.map((item) => {
      return <Tour key={item._id} item={item} />;
    });
    return <div className="card-container">{elements}</div>;
  }
}

export default Tours;
