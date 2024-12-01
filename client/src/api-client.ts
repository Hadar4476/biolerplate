import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to add the JWT token to each request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from localStorage

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Add token to Authorization header
    }

    return config; // Proceed with the request
  },
  (error) => {
    return Promise.reject(error); // Handle request error
  }
);

export default apiClient;
