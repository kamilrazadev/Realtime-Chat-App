import React, { useState } from "react";
import ChatCard from "./ChatCard";
import useAuthorizedGetData from "../../hooks/useAuthorizedGetData";
import { serverUrl } from "../../appConstants";

const Chats = () => {
  const { loading, data: conversations } = useAuthorizedGetData(
    `${serverUrl}/api/user/get-all-users`
  );

  const [selectedConversationId, setSelectedConversationId] = useState("");

  return (
    <div className="overflow-y-auto">
      {loading && (
        <>
          <LoadingChatCard />
          <LoadingChatCard />
          <LoadingChatCard />
          <LoadingChatCard />
          <LoadingChatCard />
        </>
      )}
      {!loading &&
        conversations?.map((conversation, key) => (
          <ChatCard
            key={key}
            conversation={conversation}
            selectedConversationId={selectedConversationId}
            setSelectedConversationId={setSelectedConversationId}
          />
        ))}
    </div>
  );
};

export default Chats;

const LoadingChatCard = () => {
  return (
    <div className="w-full flex ps-2 py-2">
      <div className="flex flex-col gap-4 w-52">
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
