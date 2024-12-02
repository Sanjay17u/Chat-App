/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const User = () => {
  return (
    <>
      <div>
        <h1 className="text-base font-bold bg-[#f2efe8] text-[#2a3246] px-6 py-1">
          Messages
        </h1>
        <div className="text-black flex space-x-4 px-6 py-6 place-items-center">
        <Avatar className="w-14 h-14" >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-black">CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold">Sanjay Solanki</h1>
          <span className="text-xs">Sanjay@Dev.com</span>
        </div>
        </div>
        </div>
    </>
  );
};

export default User;
