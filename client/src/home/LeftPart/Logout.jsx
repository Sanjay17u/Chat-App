/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut, SearchIcon } from 'lucide-react'

const Logout = () => {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2 px-6 py-4 place-items-center sm:max-w-md md:max-w-lg lg:max-w-xl">
        <Button type="submit" className="rounded-full hover:shadow-sm ">
          <LogOut className="transform rotate-180" strokeWidth={3}/>
        </Button>
      </div>
    </>
  );
};

export default Logout;
