/* eslint-disable */
import { Routes, Route, Link } from "react-router-dom";

import Layout from "./components/layout/layout";

import Tours from "./pages/tours/tours";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Notfound from "./pages/notfound/notfound";
import BibTour from "./pages/bigTour/bigTour";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tours />} />
          <Route path="login" element={<Login />} />
          <Route path="tour/:slug/:id" element={<BibTour />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
