import React, { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const ChatCard = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation?._id;
  const isOnline = onlineUsers.includes(conversation?._id);

  return (
    <div
      className={`flex gap-3 p-2 border-b border-gray-600 ${
        isSelected ? "bg-gray-700" : "bg-transparent"
      }  hover:bg-gray-700 cursor-pointer transition-all`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-14 rounded-full">
          <img src={conversation?.profilePic} />
        </div>
      </div>

      <div className="py-2">
        <p className="text-[16px] font-bold text-white">
          {conversation?.fullName}
        </p>
        {/* <p className="text-[12px]">hello, i am john doe</p> */}
      </div>

      <div className="flex justify-end items-end flex-1">
        <p className="text-[11px]">12:24pm</p>
      </div>
    </div>
  );
};

export default ChatCard;
