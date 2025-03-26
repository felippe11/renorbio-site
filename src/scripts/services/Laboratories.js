import axios from "axios";
import * as urls from "../config";

export default {
  getLaboratories() {
    const service = `${urls.LABORATORIES}?id=0`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => error);
  },
  getLaboratorie(id) {
    const service = `${urls.LABORATORIES}?id=${id}`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => error);
  },
  searchLab(keyword) {
    const service = `${urls.LABORATORIES}?id=0&q=${keyword}`;
    return axios.get(service);
  },
};
