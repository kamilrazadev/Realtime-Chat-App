import React, { useState } from "react";
import ChatCard from "./ChatCard";
import useAuthorizedGetData from "../../hooks/useAuthorizedGetData";
import { serverUrl } from "../../appConstants";
import ChatSkeleton from "../skeletons/ChatSkeleton";

const Chats = () => {
  const { loading, filteredConversations } = useAuthorizedGetData(
    `${serverUrl}/api/user/get-all-users`
  );

  return (
    <div className="overflow-y-auto">
      {loading && (
        <>
          <ChatSkeleton />
          <ChatSkeleton />
          <ChatSkeleton />
          <ChatSkeleton />
          <ChatSkeleton />
        </>
      )}
      {!loading && filteredConversations.length === 0 && <p className="p-2">No Match Found</p>}
      {!loading &&
        filteredConversations?.map((conversation, key) => (
          <ChatCard key={key} conversation={conversation} />
        ))}
    </div>
  );
};

export default Chats;
