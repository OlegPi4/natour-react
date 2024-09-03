/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

// type is either 'password' or 'data'

class SettingsMeServices {
  //_apiBase = "https://natour-red.vercel.app/api/v1/users";
  _apiBase = "https://natour-react.vercel.app/api/v1/users";
  updateSettings = async (name, email, photo) => {
    try {
      const res = await axios({
        withCredentials: true,
        method: "PATCH",
        url: `${this._apiBase}/updateMe`,
        data: {
          name,
          email,
          photo,
        },
      });

      if (res.data.status === "success") {
        showAlert("success", `${type.toUpperCase()} updated successfully!`);
      }
      return res.data.user;
    } catch (err) {
      console.log(JSON.stringify(err));
      showAlert("error", err.message);
      throw err;
    }
  };
}

export default SettingsMeServices;

// export const updatePassword = async (
//   passwordCurrent,
//   password,
//   passwordConfirm
// ) => {
//   try {
//     const res = await axios({
//       withCredentials: true,
//       method: "PATCH",
//       url: `${_apiBase}/updateMyPassword`,
//       data: {
//         passwordCurrent,
//         password,
//         passwordConfirm,
//       },
//     });

//     if (res.data.status === "success") {
//       showAlert("success", `${type.toUpperCase()} updated successfully!`);
//       location.assign("/me");
//     }
//   } catch (err) {
//     showAlert("error", err.response.data.message);
//   }
// };
