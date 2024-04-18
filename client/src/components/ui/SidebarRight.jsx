import React from "react";
import { Button } from "@/components/ui/button";

const SidebarRight = ({ user }) => {
  return (
    <div className="pl-12 border-l-[1px] border-l-gray-400">
      <Button variant="link" className="text-xl text-foreground mt-16">
        {user ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
};

export default SidebarRight;
