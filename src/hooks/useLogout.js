import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

import { serverUrl } from "../appConstants";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthState } = useAuthContext();
  const { setSelectedConversation } = useConversation();

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post(`${serverUrl}/api/auth/logout`);

      Cookies.remove("authData");
      setAuthState(null);
      setSelectedConversation(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
