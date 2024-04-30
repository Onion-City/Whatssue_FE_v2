"use client"; //set으로 만들고 해당을 제거
import { Floating } from "@/components/atoms/floating";
import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { testArr } from "../constants/testArr/TestArr";
import "./Board.css";
import BoardItem from "./BoardItem";

const Board = () => {
  const router = useRouter();
  const pathname = usePathname();
  const boardTypeAddress = pathname.split("/board/")[1];
  const boardType = boardTypeAddress === "notice" ? "공지" : "자유";
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
          img={ICONS.floatingPlus}
          alt="Plus"
          inStyle={inPlusStyle}
          onClick={() => router.push(`/board/${boardTypeAddress}/regis`)}
        />
      </div>
    </div>
  );
};

export default Board;
