import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { PostList } from "@/types/post";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./BoardListBox.css";
interface BoardListBoxProp {
  clubId: number;
  boardType: "공지" | "자유";
  boardTypeAddress: "notice" | "free";
  data: PostList[]|undefined;
}
interface BoardListItemProp {
  id: number;
  title: string;
}

const BoardListBox = ({
  clubId,
  boardType,
  boardTypeAddress,
  data,
}: BoardListBoxProp) => {
  const router = useRouter();
  const handleRouteBoard = (boardTypeAddress: string) => {
    router.push(`/${clubId}/board/${boardTypeAddress}`);
  };
  const BoardListItem = ({ id, title }: BoardListItemProp) => {
    const handleRouteBoardDetail = (id: number) => {
      router.push(`/${clubId}/board/${boardTypeAddress}/${id}`);
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
        {data?.map((item, index) => (
          <BoardListItem key={index} id={item.postId} title={item.postTitle} />
        ))}
      </div>
    </div>
  );
};

export default BoardListBox;
