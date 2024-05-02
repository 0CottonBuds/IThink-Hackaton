import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const NewComment = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(() => e.target.value);
  };

  const handleSubmit = () => {
    console.log(comment);
  };

  return (
    <div className="px-6 pt-28 flex justify-center pb-10">
      <div className="w-[80%] flex flex-col gap-6">
        <Textarea
          value={comment}
          onChange={handleChange}
          className="text-lg bg-white text-gray-900"
          placeholder="Write your comment here..."
        />
        <Button
          onClick={handleSubmit}
          className="hover:bg-white hover:text-primary font-bold text-lg self-end"
        >
          Comment
        </Button>
      </div>
    </div>
  );
};

export default NewComment;
