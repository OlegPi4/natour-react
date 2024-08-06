/* eslint-disable */
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import React, { Component } from "react";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_TOKEN,
});

export default function MyMap({ locations }) {
  return (
    <>
      <Map
        style="mapbox://styles/olegpi4/clxx4qkeo000k01qzhl8xh97u"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        zoom={[8]}
        center={[locations[0].coordinates[0], locations[0].coordinates[1]]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.0047846041145, 0.3233379650232]} />
        </Layer>
      </Map>
    </>
  );
}
