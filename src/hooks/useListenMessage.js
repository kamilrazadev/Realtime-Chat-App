import React, { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  const getLatestMessages = () => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  };

  useEffect(() => {
    getLatestMessages();
  }, [socket, messages, setMessages]);
};
export default useListenMessage;
