/* eslint-disable */
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import LayoutMe from "./components/pages/me/layoutMe/layoutMe";
import { ForgotPassword, Login, Notfound, Signup } from "./components/pages";
import Spinner from "./components/spiner/spiner";
import FormUserSetup from "./components/pages/me/formUserSetup/formUserSetup";
import MyReviews from "./components/pages/me/myReviews/myReviews";
import MyTouts from "./components/pages/me/myTours/myTours";
import MyBilling from "./components/pages/me/myBilling/myBilling";
import AdmTours from "./components/pages/me/admTours/admTours";
import AdmUsers from "./components/pages/me/admUsers/admUsers";
import AdmReviews from "./components/pages/me/admReviews/admReviews";
import AdmBooking from "./components/pages/me/admBooking/admBooking";

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
            <Route path="me" element={<LayoutMe />}>
              <Route path="edit-profile" element={<FormUserSetup />} />
              <Route path="my-tours" element={<MyTouts />} />
              <Route path="my-reviews" element={<MyReviews />} />
              <Route path="my-billing" element={<MyBilling />} />
              <Route path="adm-tours" element={<AdmTours />} />
              <Route path="adm-users" element={<AdmUsers />} />
              <Route path="adm-reviews" element={<AdmReviews />} />
              <Route path="adm-booking" element={<AdmBooking />} />
              <Route path="*" element={<Notfound />} />
            </Route>
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
