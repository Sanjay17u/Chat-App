/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserAccounts from "./UserAccounts";
import { ScrollArea } from "@/components/ui/scroll-area"
import './ScrollArea.css'

const User = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <h1 className="text-base font-bold bg-[#f2efe8] text-[#2a3246] px-6 py-1 mb-2">
          Messages
        </h1>
        <ScrollArea className="custom-scroll-area ">
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
          <UserAccounts/>
        </ScrollArea>
      </div>
    </>
  );
};

export default User;
