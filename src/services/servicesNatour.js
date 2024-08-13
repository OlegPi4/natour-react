import useHttp from "../hooks/http.hook";
import { showAlert } from "./alerts";

const useServiceNatour = () => {
  const { loading, error, request } = useHttp();

  const _apiBase = "https://natour-red.vercel.app/api/v1/users";

  const login = async (email, password) => {
    try {
      const res = await request("POST", `${_apiBase}/login`, {
        email,
        password,
      });

      return res.data.user;
    } catch (error) {}
  };

  const logout = async () => {
    try {
      const res = await request("GET", `${_apiBase}/logout`);
      if ((res.data.status = "success")) {
        return res.data.status;
      }
    } catch (err) {
      console.log(err.response);
      showAlert("error", "Error logging out! Try again.");
    }
  };
  return { loading, error, login, logout };
};

export default useServiceNatour;
