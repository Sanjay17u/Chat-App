/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Chatuser = () => {
  return (
    <>
      <div className="flex space-x-3 w-full justify-center space-y-3 shadow-md place-items-center pb-2">
        <Avatar className="w-10 h-10 mt-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-black">CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ">
          <h1 className="text-sm font-semibold">Sanjay Solanki</h1>
          <span className="text-xs text-gray-600">Offline</span>
        </div>
      </div>
    </>
  );
};

export default Chatuser;
