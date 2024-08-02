import { Floating } from "@/components/atoms/floating";
import { ICONS } from "@/constants/images";
import usePostListQuery from "@/hook/post/usePostListQuery";
import { FormatPostCategory } from "@/utils/extractPathElements";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import "./Board.css";
import BoardItem from "./BoardItem";

const Board = () => {
  const router = useRouter();
  const pathname = usePathname();
  const category = FormatPostCategory() === "notice" ? "NOTICE" : "FREE";
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
      <div className="board__content__list__top"/>
      <div className="board__content__meeting">
        {data?.data.content.map((item, index) => (
          <BoardItem
            key={index}
            id={item.postId}
            title={item.postTitle}
            content={item.postContent}
            createdAt={item.createdAt}
            commentCount={item.commentCount}
            // contentImgs={item.uploadImage}
            contentImgs={Object.values(item.uploadImage)[0]}
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
