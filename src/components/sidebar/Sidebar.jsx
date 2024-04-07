import React from "react";
import SearchBar from "./SearchBar";
import Chats from "./Chats";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <>
      <SearchBar />
      <Chats />
      <LogoutButton />
    </>
  );
};

export default Sidebar;
