/* eslint-disable */
import { useState, useEffect } from "react";
import SettingsMeServices from "../../../../services/servicesSettingsMe";
import InputComponent from "../../../components-ui/InputComponent";

const FormUserSetup = () => {
  const [user, setUser] = useState({});
  const [showSave, setShowSave] = useState(false);
  const [showPassw, setShowPassw] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const settingsMeServices = new SettingsMeServices();

  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitPassword = (e) => {
    e.preventDefault();
    setShowPassw(true);
    settingsMeServices.updatePassword(
      passwordCurrent,
      password,
      passwordConfirm
    );
    setShowPassw(false);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setShowSave(true);

    settingsMeServices
      .updateSettings(user.name, user.email, user.photo)
      .then((res) => console.log(res));

    setShowSave(false);
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
        <form className="form form-user-data">
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
              accept="images/*"
              id="photo"
              name="photo"
              veriable={user.photo}
              //onChangeValue={onChangeValue}
            />
            <label htmlFor="photo">Choose new photo</label>
          </div>
          <div className="form__group right">
            <button
              className="btn btn--small btn--green btn--save-data"
              onClick={onSubmitForm}
            >
              {showSave ? "Updating..." : "Save settings"}
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
              value={passwordCurrent}
              onChange={(e) => setPasswordCurrent(e.target.value)}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="newPassword">
              New password /{" "}
              <span style={{ fontSize: "14px" }}>min length 6</span>
            </label>
            <input
              className="form__input"
              id="password"
              type="password"
              placeholder="••••••"
              required="required"
              minLength="6"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="newPassword">
              Confirm password /{" "}
              <span style={{ fontSize: "14px" }}>min length 6</span>
            </label>
            <input
              className="form__input"
              id="newPassword"
              type="password"
              placeholder="••••••"
              required="required"
              minLength="6"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div className="form__group right">
            <button
              className="btn btn--small btn--green btn--save-data"
              onClick={onSubmitPassword}
            >
              {showPassw ? "Updating..." : "Save password"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUserSetup;
