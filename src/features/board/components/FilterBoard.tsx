import { CommonPage } from "@/types";
import { PostList } from "@/types/post";
import { useScrollHandler } from "@/utils/useScrollHandler";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import React from "react";
import "./Board.css";
import BoardItem from "./BoardItem";

interface Props {
  data: InfiniteData<CommonPage<PostList>, unknown> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<CommonPage<PostList>, unknown>,
      Error
    >
  >;
  hasNextPage: boolean;
}
const FilterBoard = ({ data, fetchNextPage, hasNextPage }: Props) => {
  const inPlusStyle: React.CSSProperties = {
    width: "1.625rem",
    height: "1.625rem",
    cursor: "pointer",
  };
  const handleMoreContent = () => {
    if (hasNextPage) fetchNextPage();
  };
  const targetRef = useScrollHandler(handleMoreContent);
  return (
    <div className="board" style={{padding: "0"}}>
      <div className="board__content__list__top" />
      <div className="board__content__meeting">
        {data?.pages
          .flatMap((page) => page.content)
          .map((item, index) => (
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
              writer={{
                name: item.writerName,
                profile: item.writerProfileImage,
              }}
            />
          ))}
        <div ref={targetRef} style={{ height: "1px" }} />
        {/* 해당을 통해 끝라인 확인 */}
      </div>
    </div>
  );
};

export default FilterBoard;
