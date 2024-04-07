import React from "react";

const SearchBar = () => {
  return (
    <div className="flex gap-2 px-2 py-4 border-b border-slate-600">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered flex-1 input-sm"
      />{" "}
      <button className="btn btn-neutral btn-sm">Search</button>
    </div>
  );
};

export default SearchBar;
