/* eslint-disable */
import { NavLink } from "react-router-dom";

const NavAdmin = () => {
  const details = [
    {
      path: "adm-tours",
      lable: "Manage tours",
      descr: "map",
    },
    {
      path: "adm-users",
      lable: "Manage users",
      descr: "users",
    },
    {
      path: "adm-revievs",
      lable: "Manage reviews",
      descr: "star",
    },
    {
      path: "adm-bookings",
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
