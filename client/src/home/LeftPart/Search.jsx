/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'

const Search = () => {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2 px-6 py-4 place-items-center sm:max-w-md md:max-w-lg lg:max-w-xl">
        <Input type="text" placeholder="Search" className="font-bold shadow-md" />
        <Button type="submit" className="rounded-full hover:shadow-sm"><SearchIcon strokeWidth={3}/></Button>
      </div>
    </>
  );
};

export default Search;
