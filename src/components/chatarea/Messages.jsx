import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessagesSkeleton from "../skeletons/MessagesSkeleton";
import useListenMessage from "../../hooks/useLIstenMessage";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessage();
  const lastMsgRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView();
    }, 0);
  }, [messages]);

  return (
    <div className="flex-1 w-full overflow-y-auto px-2">
      {loading && <MessagesSkeleton />}
      {!loading && messages?.length === 0 && (
        <p className="text-center">Send a message to start conversation</p>
      )}
      {!loading &&
        messages?.map((message, key) => (
          <div ref={lastMsgRef} key={key}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
