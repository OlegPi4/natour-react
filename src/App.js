/* eslint-disable */
import { lazy, Suspense, createRef } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layout";
import LayoutMe from "./components/pages/me/layoutMe/layoutMe";
import { ForgotPassword, Login, Notfound, Signup } from "./components/pages";
import Spinner from "./components/spiner/spiner";
import FormUserSetup from "./components/pages/me/formUserSetup/formUserSetup";
import MyReviews from "./components/pages/me/myReviews/myReviews";
import MyTours from "./components/pages/me/myTours/myTours";
import MyBilling from "./components/pages/me/myBilling/myBilling";
import AdmTours from "./components/pages/me/admTours/admTours";
import EditTour from "./components/pages/me/navAdmin/formEditTour/fornEditTour";
import AdmUsers from "./components/pages/me/admUsers/admUsers";
import AdmReviews from "./components/pages/me/admReviews/admReviews";
import AdmBooking from "./components/pages/me/admBooking/admBooking";
import "./App";

const Tours = lazy(() => import("./components/pages/tours/tours"));
const BibTour = lazy(() => import("./components/pages/bigTour/bigTour"));

const meroutes = [
  {
    path: "edit-profile",
    name: "edit-profile",
    element: <FormUserSetup />,
    nodeRef: createRef(),
  },
  {
    path: "my-tours",
    name: "my-tours",
    element: <MyTours />,
    nodeRef: createRef(),
  },
  {
    path: "my-reviews",
    name: "my-reviews",
    element: <MyReviews />,
    nodeRef: createRef(),
  },
  {
    path: "my-billing",
    name: "my-billing",
    element: <MyBilling />,
    nodeRef: createRef(),
  },
  {
    path: "adm-tours",
    name: "adm-tours",
    element: <AdmTours />,
    nodeRef: createRef(),
  },
  {
    path: "adm-users",
    name: "adm-users",
    element: <AdmUsers />,
    nodeRef: createRef(),
  },
  {
    path: "adm-reviews",
    name: "adm-reviews",
    element: <AdmReviews />,
    nodeRef: createRef(),
  },
  {
    path: "adm-booking",
    name: "adm-booking",
    element: <AdmBooking />,
    nodeRef: createRef(),
  },
];

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
              {meroutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  ref={route.nodeRef}
                ></Route>
              ))}
              <Route path="adm-tours/:id" element={<EditTour />} />
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
