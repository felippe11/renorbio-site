import axios from "axios";
import * as urls from "../config";

export default {
  getProcessoSeletivo() {
    const service = urls.PROCESSOSELETIVO;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
};
