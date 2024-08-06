import axios from "axios";
import { showAlert } from "./alerts";

class UsersService {
  _apiBase = "https://natour-red.vercel.app/api/v1/users";

  getUsers = async (url) => {
    try {
      const res = await axios.get(`${url}`);
      return res.data;
    } catch (err) {
      throw new Error(`Error fetching users ${url}, status: ${err}`);
    }
  };

  login = async (email, password) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${this._apiBase}/login`,
        data: {
          email,
          password,
        },
      });

      if (res.data.status === "success") {
        showAlert("success", "Logged in successfully!");
        window.setTimeout(() => {}, 1500);
      }

      return res.data;
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };

  logout = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${this._apiBase}/logout`,
      });
      if ((res.data.status = "success")) {
        return res.data.status;
      }
    } catch (err) {
      console.log(err.response);
      showAlert("error", "Error logging out! Try again.");
    }
  };

  getAllUsers = () => {
    return this.getResours(`${this._apiBase}`);
  };

  getOneUser = (id) => {
    return this.getResours(`${this._apiBase}/${id}`);
  };
}

export default UsersService;
