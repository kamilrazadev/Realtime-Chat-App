import React, { useEffect, useState } from "react";

const ChatCard = ({
  conversation,
  selectedConversationId,
  setSelectedConversationId,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedConversationId === conversation._id);
  }, [selectedConversationId]);

  return (
    <div
      className={`flex gap-3 p-2 border-b border-gray-600 ${
        isSelected ? "bg-gray-700" : "bg-transparent"
      }  hover:bg-gray-700 cursor-pointer transition-all`}
      onClick={() => {
        localStorage.setItem(
          "selectedConversation",
          JSON.stringify(conversation)
        );
        setSelectedConversationId(conversation._id);
      }}
    >
      <div className="avatar online">
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
