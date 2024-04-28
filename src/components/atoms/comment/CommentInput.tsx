import submitIcon from "@/assets/images/ic_commentSubmit.png";
import Image from "next/image";
import React, { useState } from "react";
import "./CommentInput.css";

export const CommentInput = () => {
  const [comment, setComment] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <div className="comment__input__wrapper">
      <div className="comment__input">
        <input
          value={comment}
          onChange={handleChange}
          placeholder="댓글을 입력해주세요."
        />
        <Image src={submitIcon} alt="submit" />
      </div>
    </div>
  );
};
