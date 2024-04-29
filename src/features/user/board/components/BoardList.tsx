import { Text } from "@/components/atoms/text";
import "./BoardList.css";
import BoardListBox from "./BoardListBox";

const BoardList = () => {
  return (
    <div className="board__list__wrapper">
      <div className="board__list__top">
        <Text color="#fff" fontSize="1.0625rem" fontWeight="700">
          게시판 목록
        </Text>
      </div>
          <BoardListBox boardType={"공지"} />
          <BoardListBox boardType={"자유"} />
    </div>
  );
};

export default BoardList;
