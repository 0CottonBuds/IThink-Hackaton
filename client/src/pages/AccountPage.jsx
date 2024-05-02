import React from "react";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import avatarFallbackImg from "/public/avatarFallback.png";
import { Button } from "@/components/ui/button";

const AccountPage = ({ user }) => {
  // This component will be receiving user prop that includes user data
  // that we want to show in the this component to make it reusable.
  // to for visiting other profiles as well.

  const currentUser = {
    email: "ryansanisit19@gmail.com",
    userId: "randomId",
    username: "yisaaaa",
    bio: "One plus one is twenty one",
    avatar: null,
  };

  // if current user is the same user we are looking
  let isCurrentUser = false;

  if (user.userId == currentUser.userId) {
    isCurrentUser = true;
  }

  return (
    <div className="grid grid-cols-[25%_1fr_25%] h-screen bg-background text-foreground dark">
      <SidebarLeft />
      <div className="overflow-y-scroll no-scrollbar">
        <div className="pb-52 bg-"></div>
        <div className="relative pb-12 border-t-[1px] border-gray-400 flex ">
          <div className="absolute right-[50%] translate-x-[50%] -translate-y-[50%]">
            <Avatar className="w-48 h-48">
              <AvatarImage
                src={user.avatar ? user.avatar : avatarFallbackImg}
              />
            </Avatar>
          </div>

          <Button className="text-md ml-auto mt-5 rounded-full font-bold bg-primary text-white hover:text-primary hover:bg-white mr-4">
            Edit profile
          </Button>
        </div>
        <div className="px-16 border-b-[1px] border-b-gray-400 mb-7">
          <p className="text-2xl p-b-2 mb-3 text-center text-foreground pb-7">{`@${user.username}`}</p>
          <p className="text-xl mb-8 ">{`${user.bio}`}</p>
        </div>
        <p className="px-16 text-xl font-semibold pb-2">Post history</p>

        <div className="pb-[1000px]"></div>
      </div>
      <SidebarRight user={user} />
    </div>
  );
};

export default AccountPage;
