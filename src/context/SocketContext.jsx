import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

import { useAuthContext } from "../context/AuthContext";
import { serverUrl } from "../appConstants";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { authState } = useAuthContext();

  useEffect(() => {
    if (authState) {
      const socket = io(serverUrl, {
        query: {
          userId: authState._id,
        },
      });

      setSocket(socket);

      // socket.on() is used to listen events, can be used in both client and server
      socket.on("getOnlineUsers", (users) => setOnlineUsers(users));

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authState]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
