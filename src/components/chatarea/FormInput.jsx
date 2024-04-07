import React from "react";

const FormInput = () => {
  return (
    <form className="w-full flex gap-2 bg-[#1D232A] p-2">
      <input
        type="text"
        placeholder="type here..."
        className="outline-none border-none bg-transparent flex-1 input-sm"
      />{" "}
      <button type="submit" className="btn btn-neutral btn-sm">
        Send
      </button>{" "}
    </form>
  );
};

export default FormInput;
