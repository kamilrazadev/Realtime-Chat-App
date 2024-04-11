import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const ConversationHeader = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isThisUserOnline = onlineUsers.includes(selectedConversation?._id);

  return (
    <div className=" flex gap-4 p-2 backdrop-blur-sm">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={selectedConversation?.profilePic} />
        </div>
      </div>

      <div>
        <p className="text-white font-bold">{selectedConversation?.fullName}</p>
        {isThisUserOnline ? (
          <p className="text-sm text-success">online</p>
        ) : (
          <p className="text-sm textarea-secondary">offline</p>
        )}
      </div>
    </div>
  );
};

export default ConversationHeader;
