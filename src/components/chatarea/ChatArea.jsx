import React from "react";
import ConversationHeader from "./ConversationHeader";
import Messages from "./Messages";
import FormInput from "./FormInput";

const ChatArea = () => {
  const noChatSelected = true;
  return (
    <div className="flex-1 h-screen">
      {noChatSelected ? (
        <NoChatSelectedUI />
      ) : (
        <>
          <div className="relative bg-[url('https://i.redd.it/ts7vuoswhwf41.jpg')] bg-center bg-cover bg-no-repeat after:absolute after:w-full after:h-full after:top-0 after:left-0 after:z-10 after:bg-[#1D232A] after:bg-opacity-80 h-screen">
            <div className="relative z-50 w-full h-screen flex flex-col">
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
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <p>Welcome, John Doe</p>
      <p>Select a chat to start messaging</p>
    </div>
  );
};
