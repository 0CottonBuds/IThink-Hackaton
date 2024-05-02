import React from "react";
import NewComment from "../components/NewComment";
import SidebarRight from "../components/SidebarRight";
import SidebarLeft from "../components/SidebarLeft";
import Comment from "../components/Comment";

const Home = ({ user }) => {
  const comment = {
    commentId: "someid",
    postId: "somepostid",
    userId: "someuserid",
    username: "Yisaaaa",
    commentBody: `Noon abangers din ako sa may pintuan.. Pero narealize ko talaga nasa gitna ang kapayapaan... Walang suntukan, walang irapan, walang balyahan, walang apakan ng paa...

    Payapa ang buhay`,
    timestamp: "2024/05/02",
  };

  const comments = [];
  for (let i = 0; i < 10; i++) {
    comments.push(<Comment comment={comment} />);
  }

  return (
    <div className="grid grid-cols-[25%_1fr_25%] h-screen bg-background text-foreground dark">
      <SidebarLeft />
      <div className="overflow-y-scroll no-scrollbar">
        <NewComment />
        {comments}
      </div>
      <SidebarRight user={user} />
    </div>
  );
};

export default Home;
