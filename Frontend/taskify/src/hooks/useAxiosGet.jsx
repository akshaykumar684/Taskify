import React, { useState, useEffect } from "react";
import axios from "axios";

const initialApiData = {
  isLoading: true,
  data: null,
  isError: false,
};

export const useAxiosGet = (url) => {
  const [apiData, setApiData] = useState(initialApiData);

  const fetchData = async (url) => {
    try {
      setApiData((prev) => ({
        ...prev,
        isLoading: true,
      }));
      const data = (await axios.get(url)).data;

      setApiData((prev) => ({
        ...prev,
        isLoading: false,
        data,
      }));
    } catch (error) {
      console.log(error);
      setApiData((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
      }));
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return apiData;
};
