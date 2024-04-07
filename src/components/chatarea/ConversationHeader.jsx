import React from "react";

const ConversationHeader = () => {
  return (
    <div className=" flex gap-4 p-2 backdrop-blur-sm">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <div>
        <p className="text-white font-bold">Jane Doe</p>
        <p className="text-sm text-success">online</p>
      </div>
    </div>
  );
};

export default ConversationHeader;
