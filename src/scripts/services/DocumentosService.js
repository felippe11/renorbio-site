import axios from "axios";
import * as urls from "../config";

export default {
  getCategorias() {
    const service = `${urls.WP_URL}categoria_documento`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
  getDocumentos(id, perPage, page = 1) {
    const service = `${urls.WP_URL}documentos?categoria_documento=${id}&per_page=${perPage}&page=${page}`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
};
