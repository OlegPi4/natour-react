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
    console.log("in services users");
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

  getAllUsers = () => {
    return this.getResours(`${this._apiBase}`);
  };

  getOneUser = (id) => {
    return this.getResours(`${this._apiBase}/${id}`);
  };
}

export default UsersService;
