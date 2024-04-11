import React from "react";

const MessagesSkeleton = () => {
  return (
    <div className="w-full flex flex-col ps-2 py-2">
      <div className="flex flex-col gap-4 w-52">
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-52 self-end">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-end gap-4">
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-52">
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-52 self-end">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-end gap-4">
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default MessagesSkeleton;
