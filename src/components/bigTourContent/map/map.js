/* eslint-disable */

import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component, createRef } from "react";
import { displayMap } from "./mapbox.mjs";

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef(); // 1. Прописываем ref в конструкторе
  }

  componentDidMount() {
    const locations = this.props.tours.locations;
    const node = this.mapContainer.current;

    displayMap(node, locations);
  }

  render() {
    return (
      <>
        <div id="map" ref={this.mapContainer} className="map-container"></div>
      </>
    );
  }
}

export default MyMap;
