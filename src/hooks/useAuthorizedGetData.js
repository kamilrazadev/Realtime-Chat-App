import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import useConversation from "../zustand/useConversation";

const useAuthorizedGetData = (apiRoute) => {
  const [loading, setLoading] = useState(true);
  const { setConversations, filteredConversations, setFilteredConversations } =
    useConversation();

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      const res = await axios.post(apiRoute, { token: token });
      const data = res.data;

      setConversations(data);
      setFilteredConversations(data);
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
    fetchData();
  }, []);

  return { loading, filteredConversations };
};

export default useAuthorizedGetData;
