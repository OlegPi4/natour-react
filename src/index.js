import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToursService from "./services/servicesTours";
import reportWebVitals from "./reportWebVitals";

const tourService = new ToursService();
tourService.getAllTours().then((res) =>
  res.data.data.forEach((element) => {
    console.log(element.name);
  })
);
tourService
  .getOneTour("5c88fa8cf4afda39709c2970")
  .then((res) => console.log(res));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
