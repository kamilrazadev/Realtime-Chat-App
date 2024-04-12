import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { useAuthContext } from "./context/AuthContext";
import axios from "axios";
import { serverUrl } from "./appConstants";

const App = () => {
  const { authState } = useAuthContext();

  useEffect(() => {
    const homeApi = async () => {
      const res = await axios.get(`${serverUrl}/`);
      console.log(res.data);
    };
    homeApi();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={authState ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authState ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authState ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
