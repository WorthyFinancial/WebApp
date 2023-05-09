import axios from "axios";
// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL: "https://stage-worthaiapi.herokuapp.com/api",
};
// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);
// Main api function
const api = (axios) => {
  return {
    get: (url, config = {}) => axios.get(url, config),
    delete: (url, config = {}) => axios.delete(url, config),
    post: (url, body, config = {}) => axios.post(url, body, config),
    put: (url, body, config = {}) => axios.put(url, body, config),
  };
};
export default api(axiosInstance);
