import usePostListQuery from "@/hook/post/usePostListQuery";
import { usePathname } from "next/navigation";
import "./BoardList.css";
import BoardListBox from "./BoardListBox";

const BoardList = () => {
  const pathname = usePathname();
  const startedPath = pathname.split("/").slice(1)[0];
  const clubId = parseInt(startedPath, 10);
  const { data: noticeList } = usePostListQuery({
    clubId: clubId,
    category: "NOTICE",
    page: 0,
    size: 7,
  });
  const { data: freeList } = usePostListQuery({
    clubId: clubId,
    category: "FREE",
    page: 0,
    size: 7,
  });
  return (
    <div className="board__list__wrapper">
      <div className="board__list__top" />
      <BoardListBox
        clubId={clubId}
        boardType={"공지"}
        boardTypeAddress="notice"
        data={noticeList?.data.content}
      />
      <BoardListBox
        clubId={clubId}
        boardType={"자유"}
        boardTypeAddress="free"
        data={freeList?.data.content}
      />
    </div>
  );
};

export default BoardList;
