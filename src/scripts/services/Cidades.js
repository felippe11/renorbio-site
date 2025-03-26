import axios from "axios";
import * as urls from "../config";

export default {
  getCidades(id) {
    const service = `${urls.CIDADES}?cod_estados=${id}`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
};
