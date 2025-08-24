import { useState } from "react";
import axios from "axios";

const initialApiData = {
  isLoading: false,
  data: null,
  isError: false,
  errorMessage: "",
};

export const useAxiosMutation = (url, method = "POST", onErrorCb) => {
  const [apiData, setApiData] = useState(initialApiData);

  const makeApiCall = async (formData) => {
    try {
      setApiData({
        ...initialApiData,
        isLoading: true,
      });

      let response;
      if (method.toUpperCase() === "PUT") {
        response = await axios.put(url, formData, { withCredentials: true });
      } else {
        response = await axios.post(url, formData, { withCredentials: true });
      }

      setApiData((prev) => ({
        ...prev,
        isLoading: false,
        data: response.data,
      }));
    } catch (error) {
      onErrorCb?.(error.message);
      setApiData((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
        errorMessage: error.response?.data?.msg || error.message,
      }));
      throw error;
    }
  };

  return [apiData, makeApiCall];
};
