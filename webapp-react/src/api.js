import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Il nostro backend Express
});

export default api;
