import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

import { serverUrl } from "../appConstants";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthState } = useAuthContext();

  const signup = async (payload) => {
    const isDataValid = handleInputErrors(payload);

    if (!isDataValid) return;

    setLoading(true);
    try {
      const res = await axios.post(`${serverUrl}/api/auth/signup`, payload);
      const data = res.data;

      Cookies.set("authData", JSON.stringify(data));
      Cookies.set("token", data.token);
      setAuthState(data);
    } catch (error) {
      if (error?.response?.data?.error) {
        return toast.error(error.response.data.error);
      }
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

const handleInputErrors = (payload) => {
  const { fullName, username, password, confirmPassword, gender } = payload;

  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters long");
    return false;
  }

  return true;
};
