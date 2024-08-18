/* eslint-disable */
import { NavLink } from "react-router-dom";

const NavAdmin = () => {
  const details = [
    {
      path: "#",
      lable: "Manage tours",
      descr: "map",
    },
    {
      path: "#",
      lable: "Manage users",
      descr: "users",
    },
    {
      path: "#",
      lable: "Manage reviews",
      descr: "star",
    },
    {
      path: "#",
      lable: "Manage bookings",
      descr: "briefcase",
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
  return (
    <>
      <div className="admin-nav">
        <h5 className="admin-nav__heading"> Admin </h5>
        <ul className="side-nav">{element}</ul>
      </div>
    </>
  );
};

export default NavAdmin;
