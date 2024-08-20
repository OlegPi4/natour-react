import { Outlet } from "react-router-dom";

import Me from "../me";

const LayoutMe = () => {
  return (
    <div className="user-view">
      <Me />
      <div className="user-view__content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutMe;
