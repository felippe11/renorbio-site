import axios from "axios";
import * as urls from "../config";

export default {
  getAreas() {
    const service = urls.AREASCONCENTRACAO;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
  getDisciplinas(id) {
    const service = `${urls.LISTADISCIPLINAS}?area=${id}`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
};
