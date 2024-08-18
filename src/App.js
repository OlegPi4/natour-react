/* eslint-disable */
import { Routes, Route, Link } from "react-router-dom";

import Layout from "./components/layout/layout";

import {
  BibTour,
  ForgotPassword,
  Login,
  Me,
  Notfound,
  Signup,
  Tours,
} from "./components/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tours />} />
          <Route path="login" element={<Login />} />
          <Route path="tour/:slug/:id" element={<BibTour />} />
          <Route path="signup" element={<Signup />} />
          <Route path="me" element={<Me />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
