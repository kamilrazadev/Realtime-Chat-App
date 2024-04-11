import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import extractFormattedTime from "../../utils/extractFormattedTime";

const Message = ({ message }) => {
  const { authState } = useAuthContext();
  const { selectedConversation } = useConversation();

  const isMyMessage = message?.senderId === authState?._id;
  const formattedTime = extractFormattedTime(message?.createdAt);

  return (
    <div className={`chat ${isMyMessage ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              isMyMessage
                ? authState?.profilePic
                : selectedConversation?.profilePic
            }
          />
        </div>
      </div>
      <div
        className={`chat-bubble ${
          isMyMessage ? "bg-[#268e4d]" : "bg-slate-600"
        } text-white`}
      >
        {message?.message}
      </div>
      <p className="text-[10px]">{formattedTime}</p>
    </div>
  );
};

export default Message;
