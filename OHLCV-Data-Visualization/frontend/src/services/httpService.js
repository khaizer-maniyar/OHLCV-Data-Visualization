import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://127.0.0.1:5000" //Change

// Interceptor for handling errors
axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
  
    if (!expectedError) {
      toast.error("Unexpected error occurred");
    }
  
    return Promise.reject(error);
  });

  export default {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete,
  };

