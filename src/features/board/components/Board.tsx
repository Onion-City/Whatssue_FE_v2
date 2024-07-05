"use client"; //set으로 만들고 해당을 제거
import { Floating } from "@/components/atoms/floating";
import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import usePostListQuery from "@/hook/post/usePostListQuery";
import { formatPostCategory } from "@/utils/extractPathElements";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import "./Board.css";
import BoardItem from "./BoardItem";

const Board = () => {
  const router = useRouter();
  const pathname = usePathname();
  const category = formatPostCategory() === "notice" ? "NOTICE" : "FREE";
  const boardType = category === "NOTICE" ? "공지" : "자유";

  const { data } = usePostListQuery({
    category: category,
    page: 0,
    size: 10,
  });
  const inPlusStyle: React.CSSProperties = {
    width: "1.625rem",
    height: "1.625rem",
    cursor: "pointer",
  };
  const handleRouteBoard = () => {
    router.push(`${pathname}/regis`);
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
          onClick={handleRouteBoard}
        />
      </div>
    </div>
  );
};

export default Board;
