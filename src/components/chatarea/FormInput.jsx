import React, { useState } from "react";
import useSendMessages from "../../hooks/useSendMessages";

const FormInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessages();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="w-full flex gap-2 bg-[#1D232A] p-2"
      onSubmit={handleSendMessage}
    >
      <input
        id="message"
        value={message}
        type="text"
        placeholder="Send a message..."
        className="outline-none border-none bg-transparent flex-1 input-sm"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="btn btn-neutral btn-sm">
        {loading ? <span className="loading loading-spinner "></span> : "Send"}
      </button>
    </form>
  );
};

export default FormInput;
