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
      showAlert("error", "Error logging out! Try again.");
    }
  };

  signup = async (name, email, password, passwordConfirm) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${this._apiBase}/signup`,
        data: {
          name,
          email,
          password,
          passwordConfirm,
        },
      });

      if (res.data.status === "success") {
        showAlert("success", "Go to your email and confirm the message! ");
        window.setTimeout(() => {}, 2500);
      }

      return res.data;
    } catch (err) {
      console.log(err.response);
      showAlert("error", "Something went very wrong!");
    }
  };

  forgot = async (email) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${this._apiBase}/forgotPassword`,
        data: {
          email,
        },
      });
      return res.data;
    } catch (err) {
      showAlert("error", err.response.data.message);
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
