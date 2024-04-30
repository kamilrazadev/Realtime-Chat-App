import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ChatArea from "../../components/chatarea/ChatArea";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="h-screen w-full flex">
      <div className="flex flex-col max-[660px]:w-full w-fit">
        <Sidebar />
      </div>
      <div
        className={`h-screen flex-1 flex ${
          selectedConversation
            ? "max-[660px]:fixed max-[660px]:top-0 max-[660px]:left-0 max-[660px]:z-50 max-[660px]:w-full"
            : "max-[660px]:hidden"
        }`}
      >
        <ChatArea />
      </div>
    </div>
  );
};

export default Home;
