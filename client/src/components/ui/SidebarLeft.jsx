import React from "react";
import { PiHouseFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const SidebarLeft = () => {
  return (
    <div className="pl-52 border-r-[1px] border-r-gray-400">
      <div className="text-4xl mt-4 font-bold">Logo</div>
      <Button variant="link" className="flex gap-2 h-7 mt-16 p-0 text-white">
        <PiHouseFill className="text-foreground w-full h-full" />
        <span className="text-lg font-semibold text-foreground">Home</span>
      </Button>
    </div>
  );
};

export default SidebarLeft;
