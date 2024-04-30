import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { testArr } from "../constants/testArr/TestArr";
import "./BoardListBox.css";
interface BoardListBoxProp {
  boardType: string;
}
interface BoardListItemProp {
  id: number;
  title: string;
}

const BoardListBox = ({ boardType }: BoardListBoxProp) => {
  const boardTypeAddress = boardType === "공지" ? "notice" : "free";
  const router = useRouter();
  // 글 작성페이지로 이동
  const handleRouteBoard = (boardTypeAddress: string) => {
    router.push(`/board/${boardTypeAddress}`);
  };

  // 박스 속 아이템 하나
  const BoardListItem = ({ id, title }: BoardListItemProp) => {
    const handleRouteBoardDetail = (id: number) => {
      router.push(`/board/${boardTypeAddress}/${id}`);
    };
    return (
      <div
        className="board__list__item"
        onClick={() => handleRouteBoardDetail(id)}
      >
        <Text color="#D9D9D9" fontSize="0.8125rem" fontWeight="600">
          {title}
        </Text>
        <Image src={ICONS.newBoard} alt="new" />
      </div>
    );
  };

  return (
    <div className="board__list__box">
      <div className="board__list__title">
        <Text color="#fff" fontSize="0.9375rem" fontWeight="800">
          {boardType} 게시판
        </Text>
        <div
          onClick={() => handleRouteBoard(boardTypeAddress)}
          style={{ cursor: "pointer" }}
        >
          <Text color="#989898" fontSize="0.9375rem" fontWeight="600">
            더보기 {">"}
          </Text>
        </div>
      </div>
      <div className="board__list__item__wrapper">
        {testArr.slice(0, 7).map((item, index) => (
          <BoardListItem key={index} id={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default BoardListBox;
