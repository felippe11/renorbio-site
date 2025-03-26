import axios from "axios";
import * as urls from "../config";

export default {
  getEstados() {
    const service = urls.ESTADOS;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
  getPontosFocais() {
    const service = `${urls.ESTADOS}?type=focalpoints`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
};
