import axios from "axios";
import * as urls from "../config";

export default {
  getUnidades() {
    const service = `${urls.UNIDADES}?state=all`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
};
