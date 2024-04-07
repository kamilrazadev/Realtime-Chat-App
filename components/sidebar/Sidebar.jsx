import React from "react";
import SearchBar from "./SearchBar";
import Chats from "./Chats";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div>
      <SearchBar />
      <div className="divider px-3"></div>
      <Chats />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
