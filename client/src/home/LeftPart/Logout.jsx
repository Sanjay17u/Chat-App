/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut, SearchIcon } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Logout = () => {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2 px-6 py-4 place-items-center sm:max-w-md md:max-w-lg lg:max-w-xl">
      <HoverCard>
        <HoverCardTrigger>
          <Button
            type="submit"
            className="relative rounded-full hover:shadow-sm px-4 py-2 border-cyan-50"
          >
            <LogOut className="transform rotate-180" strokeWidth={3} />

            <span className="absolute left-0 inset-y-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Logout
            </span>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="text-sm font-bold w-fit text-[#ff0055]">
          Logout Now.!
        </HoverCardContent>
      </HoverCard>
    </div>
    </>
  );
};

export default Logout;
