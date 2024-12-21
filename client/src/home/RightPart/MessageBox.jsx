/* eslint-disable no-unused-vars */
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

const MessageBox = () => {
  return (
    <div className="flex w-full items-center space-x-2 px-6 py-4 place-items-center">
      <Input type="text" placeholder="Message" className="font-bold shadow-md w-full" />
      
      <HoverCard>
        <HoverCardTrigger>
          <Button type="submit" className="rounded-full hover:shadow-sm">
            <SendIcon className="" strokeWidth={3} />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="text-[#446d35] w-fit font-bold text-sm p-2 rounded-md">
          Send
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default MessageBox;
