"use client"; //set으로 만들고 해당을 제거
import { Floating } from "@/components/atoms/floating";
import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import usePostListQuery from "@/hook/post/usePostListQuery";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import "./Board.css";
import BoardItem from "./BoardItem";

const Board = () => {
  const router = useRouter();
  const pathname = usePathname();
  const startedPath = pathname.split("/").slice(1)[0];
  const clubId = parseInt(startedPath, 10);
  const boardTypeAddress = pathname.split("/board/")[1];
  const boardCategory = boardTypeAddress === "notice" ? "NOTICE" : "FREE";
  const { data } = usePostListQuery({
    clubId: clubId,
    category: boardCategory,
    page: 0,
    size: 10,
  });
  const boardType = boardTypeAddress === "notice" ? "공지" : "자유";
  const inPlusStyle: React.CSSProperties = {
    width: "1.625rem",
    height: "1.625rem",
    cursor: "pointer",
  };
  const handleRouteBoard = (boardTypeAddress: string) => {
    const startedPath = pathname.split("/").slice(1)[0];
    router.push(`/${startedPath}/board/${boardTypeAddress}/regis`);
  };
  return (
    <div className="board">
      <div className="board__content__list__top">
        <Text color="#989898" fontSize="0.9375rem" fontWeight="600">
          {boardType} 게시판
        </Text>
      </div>
      <div className="board__content__meeting">
        {data?.data.content.map((item, index) => (
          <BoardItem
            key={index}
            boardAddress={boardTypeAddress}
            id={item.postId}
            title={item.postTitle}
            content={item.postContent}
            createdAt={item.createdAt}
            commentCount={item.commentCount}
            contentImgs={item.uploadImage}
            hearts={item.postLikeCount}
            isHeart={item.isLiked}
            writer={{ name: item.writerName, profile: item.writerProfileImage }}
          />
        ))}
      </div>
      <div className="board__content__floating">
        <Floating
          backgroundColor="#51F8C4"
          img={ICONS.floatingPlus}
          alt="Plus"
          inStyle={inPlusStyle}
          onClick={() => handleRouteBoard(boardTypeAddress)}
        />
      </div>
    </div>
  );
};

export default Board;
