import axios from "axios";

/*
export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("error boi");
      window.location = "/login";
    }
    return error;
  }
);
*/

const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("error boi");
      window.location = "/login";
    }
  }
);

export default instance;
