import React from "react";

const ChatCard = () => {
  return (
    <div className="flex gap-3 p-2 border-b border-gray-600 hover:bg-gray-700 cursor-pointer transition-all">
      <div className="avatar online">
        <div className="w-14 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <div className="py-2">
        <p className="text-[16px] font-bold text-white">John Doe</p>
        <p className="text-[12px]">hello, i am john doe</p>
      </div>

      <div className="flex justify-end items-end flex-1">
        <p className="text-[11px]">12:24pm</p>
      </div>
    </div>
  );
};

export default ChatCard;
