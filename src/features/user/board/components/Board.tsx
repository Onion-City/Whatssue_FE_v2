import Plus from "@/assets/images/Plus.png";
import { Floating } from "@/components/atoms/floating";
import { ChoiceBox } from "@/components/molecules/choiceBox/index";
import React, { useState } from "react";
import { testArr, testArr2 } from "../constants/testArr/TestArr";
import "./Board.css";
import BoardItem from "./BoardItem";

const Board = () => {
  const [isChoice, setIsChoice] = useState(0); // 0 === 공지, 1 === 자유
  const handleChoice = (e: number) => {
    setIsChoice(e);
  };
  const [on, setOn] = useState(false);
  const handleFloating = () => {
    setOn((prev) => !prev);
  };
  const inPlusStyle: React.CSSProperties = {
    width: "1.625rem",
    height: "1.625rem",
    transition: "all 0.4s ease",
    transform: on ? "rotate(-45deg)" : "rotate(0deg)",
  };
  return (
    <div className="home">
      <ChoiceBox
        textLeft="공지 게시판"
        textRight="자유 게시판"
        onClick={handleChoice}
        isSelected={isChoice}
      />

      <div className="home__content__meeting">
        {isChoice === 0 && testArr.length === 0 && <>1</>}
        {isChoice === 0 && testArr.length > 0 && (
          <>
            {testArr.map((item, index) => (
              <BoardItem
                key={index}
                id={item.id}
                title={item.title}
                content={item.content}
                date={item.date}
                contentImg={item.contentImg}
                comment={item.comment}
                hearts={item.hearts}
                isHeart={item.isHeart}
                writer={item.writer}
              />
            ))}
          </>
        )}
        {isChoice !== 0 && testArr2.length === 0 && <>2</>}
        {isChoice !== 0 && testArr2.length > 0 && <>{/* 신청한 모임 */}</>}
      </div>
      <div className="home__content__floating">
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
