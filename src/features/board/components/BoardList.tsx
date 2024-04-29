import "./BoardList.css";
import BoardListBox from "./BoardListBox";

const BoardList = () => {
  return (
    <div className="board__list__wrapper">
      <div className="board__list__top" />
          <BoardListBox boardType={"공지"} />
          <BoardListBox boardType={"자유"} />
    </div>
  );
};

export default BoardList;
