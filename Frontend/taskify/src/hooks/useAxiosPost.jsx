import React, { useState } from "react";
import axios from "axios";

const initialApiData = {
  isLoading: false,
  data: null,
  isError: false,
};

export const useAxiosPost = (url, onErrorCb) => {
  const [apiData, setApiData] = useState(initialApiData);

  const makeApiCall = async (formData) => {
    try {
      setApiData((prev) => ({
        ...prev,
        isLoading: true,
      }));

      const data = (await axios.post(url, formData, { withCredentials: true }))
        .data;

      setApiData((prev) => ({
        ...prev,
        isLoading: false,
        data,
      }));
    } catch (error) {
      console.log(error);
      onErrorCb?.(error.message);
      setApiData((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
      }));
    }
  };

  return [apiData, makeApiCall];
};
