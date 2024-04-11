import React from "react";
import useConversation from "../../zustand/useConversation";

const ConversationHeader = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className=" flex gap-4 p-2 backdrop-blur-sm">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={selectedConversation?.profilePic} />
        </div>
      </div>

      <div>
        <p className="text-white font-bold">{selectedConversation?.fullName}</p>
        <p className="text-sm text-success">online</p>
      </div>
    </div>
  );
};

export default ConversationHeader;
