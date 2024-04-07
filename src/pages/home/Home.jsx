import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import ChatArea from "../../../components/chatarea/ChatArea";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="flex flex-col">
        <Sidebar />
      </div>
      <div className="flex-1 flex">
        <ChatArea />
      </div>
    </div>
  );
};

export default Home;
