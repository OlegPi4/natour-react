/* eslint-disable */

//import "mapbox-gl/dist/mapbox-gl.css";

// const TOKEN = process.env.REACT_APP_TOKEN;
// const parent = document.querySelector(".section-map");
// const el = document.createElement("div");
// el.setAttribute("id", "map");

// parent.appendChild(el);

// function Mapinner({ loc }) {
//   console.log(TOKEN);
//   console.log(loc);
//   mapboxgl.accessToken = TOKEN;

//   const map = new mapboxgl.Map({
//     container: el,
//     style: "mapbox://styles/olegpi4/clxx4qkeo000k01qzhl8xh97u",
//     scrollZoom: false,
//   });

//   const bounds = new mapboxgl.LngLatBounds();

//   loc.forEach((loc) => {
//     const el = document.createElement("div");
//     el.className = "marker";

//     new mapboxgl.Marker({
//       element: el,
//       ancor: "bottom",
//     })
//       .setLngLat(loc.coordinates)
//       .addTo(map);

//     new mapboxgl.Popup({
//       offset: 30,
//     })
//       .setLngLat(loc.coordinates)
//       .setHTML(`<p> Day ${loc.day}: ${loc.description} </p>`)
//       .addTo(map);

//     bounds.extend(loc.coordinates);
//   });

//   map.fitBounds(bounds, {
//     padding: {
//       top: 200,
//       bottom: 150,
//       left: 100,
//       right: 100,
//     },
//   });

//  return <></>;
//}

//export default Mapinner;
