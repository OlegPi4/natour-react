/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

// type is either 'password' or 'data'

class SettingsMeServices {
  _apiBase = "https://natour-react.vercel.app/api/v1/users";
  jwtToken = localStorage.getItem("token");

  updateSettings = async (name, email, photo) => {
    try {
      const res = await axios({
        withCredentials: true,
        method: "PATCH",
        url: `${this._apiBase}/updateMe`,
        headers: { Authorization: `Bearer ${this.jwtToken}` },

        data: JSON.stringify({
          name,
          email,
          photo,
        }),
      });

      if (res.data.status === "success") {
        showAlert("success", `${type.toUpperCase()} updated successfully!`);
      }
      return res.data.user;
    } catch (err) {
      console.log(err);
      showAlert("error", err);
    }
  };

  updatePassword = async (passwordCurrent, password, passwordConfirm) => {
    try {
      const res = await axios({
        withCredentials: true,
        method: "PATCH",
        headers: { Authorization: `Bearer ${this.jwtToken}` },
        url: `${this._apiBase}/updateMyPassword`,
        data: JSON.stringify({
          passwordCurrent,
          password,
          passwordConfirm,
        }),
      });

      if (res.data.status === "success") {
        showAlert("success", `${type.toUpperCase()} updated successfully!`);
        location.assign("/me");
      }
    } catch (err) {
      console.log(err);
      showAlert("error", err);
    }
  };
}

export default SettingsMeServices;
