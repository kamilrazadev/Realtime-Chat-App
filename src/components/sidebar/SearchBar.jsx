import React, { useState } from "react";
import useConversation from "../../zustand/useConversation";

const SearchBar = () => {
  const { conversations, setFilteredConversations } = useConversation();

  const handleSearchConversation = (searchText) => {
    const filteredConversations = conversations?.filter((c) =>
      c.fullName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredConversations(filteredConversations);
  };

  return (
    <form
      className="flex gap-2 px-2 py-4 border-b border-slate-600"
      // onSubmit={handleSearchConversation}
    >
      <input
        onChange={(e) => handleSearchConversation(e.target.value)}
        type="text"
        placeholder="Search..."
        className="input input-bordered flex-1 input-sm"
      />{" "}
      <button type="submit" className="btn btn-neutral btn-sm">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
