import usePostListQuery from "@/hook/post/usePostListQuery";
import "./BoardList.css";
import BoardListBox from "./BoardListBox";

const BoardList = () => {
  const { data: noticeList } = usePostListQuery({
    category: "NOTICE",
    page: 0,
    size: 7,
  });
  const { data: freeList } = usePostListQuery({
    category: "FREE",
    page: 0,
    size: 7,
  });
  return (
    <div className="board__list__wrapper">
      <div className="board__list__top" />
      <BoardListBox
        boardType={"공지"}
        boardTypeAddress="notice"
        data={noticeList?.data.content}
      />
      <BoardListBox
        boardType={"자유"}
        boardTypeAddress="free"
        data={freeList?.data.content}
      />
    </div>
  );
};

export default BoardList;
