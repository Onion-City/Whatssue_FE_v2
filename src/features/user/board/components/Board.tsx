"use client"; //set으로 만들고 해당을 제거
import Plus from "@/assets/images/Plus.png";
import { Floating } from "@/components/atoms/floating";
import { Text } from "@/components/atoms/text";
import React from "react";
import { testArr } from "../constants/testArr/TestArr";
import "./Board.css";
import BoardItem from "./BoardItem";

interface BoardProps {
  boardType: string;
}
const Board = ({ boardType }: BoardProps) => {
  const boardTypeAddress = boardType === "공지" ? "notice" : "free";
  const handleFloating = () => {
    // 글쓰기로 이동
  };
  const inPlusStyle: React.CSSProperties = {
    width: "1.625rem",
    height: "1.625rem",
    cursor: "pointer",
  };
  return (
    <div className="board">
      <div className="board__content__list__top">
        <Text color="#989898" fontSize="0.9375rem" fontWeight="600">
          {boardType} 게시판
        </Text>
      </div>
      <div className="board__content__meeting">
        {testArr.map((item, index) => (
          <BoardItem
            key={index}
            boardAddress={boardTypeAddress}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.date}
            contentImgs={item.contentImgs}
            comment={item.comment}
            hearts={item.hearts}
            isHeart={item.isHeart}
            writer={item.writer}
          />
        ))}
      </div>
      <div className="board__content__floating">
        <Floating
          backgroundColor="#51F8C4"
          img={Plus}
          alt="Plus"
          inStyle={inPlusStyle}
          onClick={handleFloating}
        />
      </div>
    </div>
  );
};

export default Board;
