import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const useAuthorizedGetData = (apiRoute) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      const res = await axios.post(apiRoute, { token: token });
      const data = res.data;
      setData(data);
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

  return { loading, data };
};

export default useAuthorizedGetData;
