import axios from "axios";
import * as urls from "../config";

export default {
  getDisciplinasOfertadas() {
    const service = `${urls.DISCIPLINAS_OFERTADAS}?state=*`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
};
