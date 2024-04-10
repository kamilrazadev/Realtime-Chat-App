import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import { serverUrl } from "../appConstants";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthState } = useAuthContext();

  const login = async (payload) => {
    const isDataValid = handleInputErrors(payload);

    if (!isDataValid) {
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${serverUrl}/api/auth/login`, payload);
      const data = res.data;

      Cookies.set("authData", JSON.stringify(data));
      Cookies.set("token", data.token);
      setAuthState(data);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.error) {
        return toast.error(error.response.data.error);
      }
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

const handleInputErrors = (payload) => {
  const { username, password } = payload;

  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Wrong password");
    return false;
  }

  return true;
};
