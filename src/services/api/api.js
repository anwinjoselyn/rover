import axios from "axios";

const baseUrl = "https://api.nasa.gov/mars-photos/api/v1";

const API = axios.create({ baseUrl });
const api_key = "?api_key=BRqpZh6c8alX6lDDMYcAqN5JdDRo2mnV4jmfKN9T";

//Request interceptor
API.interceptors.request.use(
  config => {
    console.log("config", config);
    config.url = config.baseUrl + config.url + api_key;
    console.log("config", config);
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

//Add a response interceptor
API.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    //Normally will use these to write custom returns according to requirement. Showing here as a placeholder for this assignment.
    if (error.response.status === 400) {
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      return Promise.reject(error);
    }
    if (error.response.status === 403) {
      return Promise.reject(error);
    }
    if (error.response.status === 404) {
      return Promise.reject(error);
    }
    if (error.response.status === 500) {
      return Promise.reject(error);
    }
    if (error.response.status === 502) {
      return Promise.reject(error);
    }
    if (error.response.status === 503) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default API;
