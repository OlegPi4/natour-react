import axios from "axios";

class ToursService {
  _apiBase = "https://natour-red.vercel.app/api/v1";

  getResours = async (url) => {
    try {
      const res = await axios.get(`${url}`);
      return res.data;
    } catch (err) {
      throw new Error(`Error fetching tours ${url}, status: ${err}`);
    }
  };

  getAllTours = () => {
    return this.getResours(`${this._apiBase}/tours`);
  };

  getOneTour = (id) => {
    return this.getResours(`${this._apiBase}/tours/${id}`);
  };
}

export default ToursService;
