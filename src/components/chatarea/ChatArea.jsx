import React from "react";
import ConversationHeader from "./ConversationHeader";
import Messages from "./Messages";
import FormInput from "./FormInput";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const ChatArea = () => {
  const { selectedConversation } = useConversation();

  const noChatSelected = selectedConversation || false;
  return (
    <div className="relative w-full h-full">
      {!noChatSelected ? (
        <NoChatSelectedUI />
      ) : (
        <>
          <div className="relative bg-[url('https://i.redd.it/ts7vuoswhwf41.jpg')] bg-center bg-cover bg-no-repeat after:absolute after:w-full after:h-full after:top-0 after:left-0 after:z-10 after:bg-[#1D232A] after:bg-opacity-80 h-full">
            <div className="relative z-50 w-full h-full flex flex-col">
              <ConversationHeader />
              <Messages />
              <FormInput />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatArea;

const NoChatSelectedUI = () => {
  const { authState } = useAuthContext();

  return (
    <div className="max-h-screen w-full flex flex-col justify-center items-center text-[20px]">
      <p>
        Welcome,{" "}
        <span className="text-white capitalize">{authState.fullName}</span>
      </p>
      <p>Select a chat to start messaging</p>
    </div>
  );
};
