import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ChatArea from "../../components/chatarea/ChatArea";

const Home = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="flex flex-col">
        <Sidebar />
      </div>
      <div className="flex-1 h-screen flex">
        <ChatArea />
      </div>
    </div>
  );
};

export default Home;
