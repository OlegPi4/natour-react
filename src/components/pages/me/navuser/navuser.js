/* eslint-disable */
import { NavLink } from "react-router-dom";

const NavUser = () => {
  const details = [
    {
      path: "#",
      lable: "Settings",
      descr: "settings",
    },
    {
      path: "/my-tours",
      lable: "My bookings",
      descr: "briefcase",
    },
    {
      path: "#",
      lable: "My reviews",
      descr: "star",
    },
    {
      path: "#",
      lable: "Billing",
      descr: "credit-card",
    },
  ];

  const element = details.map((item, i) => {
    return (
      <li key={i}>
        <NavLink to={item.path}>
          <svg>
            <use xlinkHref={`/img/icons.svg#icon-${item.descr}`}></use>|
          </svg>
          <p>{`${item.lable}`}</p>
        </NavLink>
      </li>
    );
  });
  return <>{element}</>;
};

export default NavUser;
