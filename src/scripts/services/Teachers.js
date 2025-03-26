import axios from "axios";
import * as urls from "../config";

export default {
  getTeachers(id) {
    const service = `${urls.TEACHERS}?type=${id}`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
  getTeacher(id) {
    const service = `${urls.TEACHERS}?type=all&id=${id}`;
    return axios
      .get(service)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
  },
  searchTeacher(type, keyword) {
    let service;
    if (type !== "") service = `${urls.TEACHERS}?type=${type}&q=${keyword}`;
    else service = `${urls.TEACHERS}?type=all&q=${keyword}`;
    return axios.get(service);
  },
};
