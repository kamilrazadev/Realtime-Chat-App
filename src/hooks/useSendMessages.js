import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../appConstants";

const useSendMessages = () => {
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message, id) => {
    setLoading(true);
    try {
      const res = axios.post(`${serverUrl}/send/${id}`);
    } catch (error) {
      if (error?.response?.data?.error) {
        return toast.error(error.response.data.error);
      }
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessages;
