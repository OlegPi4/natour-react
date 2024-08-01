import { Component } from "react";
import ToursService from "../../services/servicesTours";

import Spinner from "../../components/spiner/spiner";
import Error from "../../components/error/error";

class BigTourContent extends Component {
  state = {
    loading: true,
    tour: {},
    error: false,
  };
  toursService = new ToursService();

  onTourLoaded = (tour) => {
    this.setState({ tour, loading: false });
  };

  onError = (err) => {
    console.error(err);
    this.setState({ error: true, loading: false });
  };

  getTour = () => {
    let id = this.props.id;
    this.toursService
      .getOneTour(id)
      .then((res) => this.onTourLoaded(res.data.data))
      .catch((err) => this.onError(err));
  };

  componentDidMount() {
    this.getTour();
  }

  render() {
    const { tour, loading, error } = this.state;

    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <Error />;
    }
    return (
      <div>
        <h1>Big Tour Content </h1>
        {tour.name}
      </div>
    );
  }
}

export default BigTourContent;
