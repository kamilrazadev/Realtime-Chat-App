import React, { useEffect, useState } from "react";
import { serverUrl } from "./appConstants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { axios } from "axios";

const App = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    const response = await axios.get(serverUrl);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>App</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
