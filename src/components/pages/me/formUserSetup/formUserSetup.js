/* eslint-disable */
import { useState, useEffect } from "react";
import InputComponent from "../../../components-ui/InputComponent";

const FormUserSetup = () => {
  const [user, setUser] = useState("");

  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
    document.title = "Natour | edit-profile  ";
  }, []);

  return (
    <>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md"> Your account settings </h2>
        <form
          className="form form-user-data"
          action="/submit-user-data"
          method="POST"
        >
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name{" "}
            </label>
            <InputComponent
              veriable={user.name}
              type={"text"}
              name={"name"}
              onChangeValue={onChangeValue}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <InputComponent
              veriable={user.email}
              type={"email"}
              name={"email"}
              onChangeValue={onChangeValue}
            />
          </div>
          <div className="form__group form__photo-upload">
            <img
              className="form__user-photo"
              src={`/img/users/${user.photo}`}
              alt="User photo"
            />
            <input
              className="form__upload"
              type="file"
              accept="image/*"
              id="photo"
              name="photo"
            />
            <label htmlFor="photo">Choose new photo</label>
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green btn--save-data">
              Save settings
            </button>
          </div>
        </form>
      </div>
      <div className="line"></div>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form className="form form-user-password">
          <div className="form__group">
            <label className="form__label" htmlFor="password-current">
              Current password
            </label>
            <input
              className="form__input"
              id="currentPassword"
              type="password"
              placeholder="••••••"
              required="required"
              minLength="6"
              name="currentPassword"
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="newPassword">
              New password /{" "}
              <span style={{ fontSize: "14px" }}>min length 6</span>
            </label>
            <input
              className="form__input"
              id="newPassword"
              type="password"
              placeholder="••••••"
              required="required"
              minLength="6"
              name="newPassword"
            />
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green btn--save-data">
              Save password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUserSetup;
