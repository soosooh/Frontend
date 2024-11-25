import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://52.78.218.160:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
