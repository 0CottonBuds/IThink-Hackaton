import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="pl-6 pr-28 flex justify-center">
      <div className="w-[80%] border-b-[1px] border-b-gray-400 pb-8 pt-8">
        <div className="flex gap-4 items-center">
          <span className="text-white font-bold text-lg">
            {comment.username}
          </span>
          <span className="text-gray-400 font-bold text-sm mt-1">
            {"\u25CF"}
          </span>
          <span className="text-gray-400 font-bold text-sm mt-1">
            {comment.timestamp}
          </span>
        </div>
        <p className="text-xl ml-2 mt-4 font-medium">{comment.commentBody}</p>
      </div>
    </div>
  );
};

export default Comment;
