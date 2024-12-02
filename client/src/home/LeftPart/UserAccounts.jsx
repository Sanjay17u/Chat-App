/* eslint-disable no-unused-vars */
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const UserAccounts = () => {
  return (
    <>
    <div className="text-black flex space-x-4 px-6 py-4 place-items-center hover:bg-[#f2efe8] duration-500 cursor-pointer">
        <Avatar className="w-12 h-12" >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-black">CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold">Sanjay Solanki</h1>
          <span className="text-xs text-gray-500">Sanjay@Dev.com</span>
        </div>
        </div>
    </>
  )
}

export default UserAccounts
