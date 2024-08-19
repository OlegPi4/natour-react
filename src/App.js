/* eslint-disable */
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout/layout";
import {
  ForgotPassword,
  Login,
  Me,
  Notfound,
  Signup,
} from "./components/pages";
import Spinner from "./components/spiner/spiner";

const Tours = lazy(() => import("./components/pages/tours/tours"));
const BibTour = lazy(() => import("./components/pages/bigTour/bigTour"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </>
  );
}

export default App;
