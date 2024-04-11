import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import useConversation from "../zustand/useConversation";
import { serverUrl } from "../appConstants";

const useGetMessages = () => {
  const [loading, setLoading] = useState(true);
  const { messages, setMessages, selectedConversation } = useConversation();

  const getMessage = async () => {
    setLoading(true);
    try {
      const token = Cookies.get("token");
      const res = await axios.post(
        `${serverUrl}/api/message/${selectedConversation?._id}`,
        { token: token }
      );
      const data = res.data;
      setMessages(data);
    } catch (error) {
      if (error?.response?.data?.error) {
        return toast.error(error.response.data.error);
      }
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessage();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
