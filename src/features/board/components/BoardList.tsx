"use client";

import usePostListQuery from "@/hook/post/usePostListQuery";
import "./BoardList.css";
import BoardListBox from "./BoardListBox";

const BoardList = () => {
  const { data: noticeList } = usePostListQuery({
    category: "NOTICE",
    size: 7,
  });
  const { data: freeList } = usePostListQuery({
    category: "FREE",
    size: 7,
  });
  return (
    <div className="board__list__wrapper">
      <div className="board__list__top" />
      <BoardListBox
        boardType={"공지"}
        boardTypeAddress="notice"
        data={noticeList?.pages.flatMap((page) => page.content)}
      />
      <BoardListBox
        boardType={"자유"}
        boardTypeAddress="free"
        data={freeList?.pages.flatMap((page) => page.content)}
      />
    </div>
  );
};

export default BoardList;
