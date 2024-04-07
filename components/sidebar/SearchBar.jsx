import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full max-w-xs input-sm"
      />{" "}
      <button className="btn btn-neutral btn-sm">Search</button>
    </div>
  );
};

export default SearchBar;
