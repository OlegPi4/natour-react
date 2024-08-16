import useHttp from "../hooks/http.hook";

const useServiceNatour = () => {
  const { loading, error, request, errorMessage, clearError } = useHttp();

  const _apiBase = "https://natour-red.vercel.app/api/v1/users";

  const login = async (email, password) => {
    //try {
    const res = await request("POST", `${_apiBase}/login`, {
      email,
      password,
    });
    //  if (res) {
    return res.data.user;
    //  }
    // } catch (error) {}
  };

  const logout = async () => {
    //try {
    const res = await request("GET", `${_apiBase}/logout`);
    //  if ((res.data.status = "success")) {
    return res.data.status;
    // }
    // } catch (err) {
    //   console.log(err.response);
    // }
  };
  return { loading, error, clearError, errorMessage, login, logout };
};

export default useServiceNatour;
