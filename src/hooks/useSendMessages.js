import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

import { serverUrl } from "../appConstants";
import useConversation from "../zustand/useConversation";

const useSendMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const token = Cookies.get("token");
      const payload = {
        message: message,
        token: token,
      };

      const res = await axios.post(
        `${serverUrl}/api/message/send/${selectedConversation?._id}`,
        payload
      );
      const data = res.data;

      setMessages([...messages, data.newMessage]);
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
