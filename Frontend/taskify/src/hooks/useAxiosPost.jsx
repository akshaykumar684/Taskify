import React, { useState } from "react";
import axios from "axios";

const initialApiData = {
  isLoading: false,
  data: null,
  isError: false,
  errorMessage: "",
};

export const useAxiosPost = (url, onErrorCb) => {
  const [apiData, setApiData] = useState(initialApiData);

  const makeApiCall = async (formData) => {
    try {
      setApiData({
        ...initialApiData,
        isLoading: true,
      });

      const data = (await axios.post(url, formData, { withCredentials: true }))
        .data;

      setApiData((prev) => ({
        ...prev,
        isLoading: false,
        data,
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
