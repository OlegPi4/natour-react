import { Route } from "react-router-dom";
import { createRef } from "react";

import FormUserSetup from "../formUserSetup/formUserSetup";
import MyReviews from "../myReviews/myReviews";
import MyTours from "../myTours/myTours";
import MyBilling from "../myBilling/myBilling";
import AdmTours from "../admTours/admTours";
import AdmUsers from "../admUsers/admUsers";
import AdmReviews from "../admReviews/admReviews";
import AdmBooking from "../admBooking/admBooking";

const LayoutMePoints = () => {
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

  return (
    <>
      {meroutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element}
          ref={route.nodeRef}
        ></Route>
      ))}
    </>
  );
};

export default LayoutMePoints;
