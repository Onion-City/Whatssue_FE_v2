import testimg from "@/assets/images/chiikyaw.png";
import IconComment from "@/assets/images/ic_comment.png";
import { Heart } from "@/components/atoms/heart/Heart";
import { Text } from "@/components/atoms/text";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import "./BoardItem.css";
export interface BoardItemProps {
  id: number;
  title: string;
  content: string;
  date: string;
  comment: number;
  hearts: number;
  contentImg?: StaticImageData | null;

  isHeart: boolean;
  writer: {
    profile: StaticImageData;
    name: string;
  };
}

const BoardItem = ({
  id,
  title,
  content,
  date,
  comment,
  hearts,
  contentImg,
  isHeart = false,
  writer: { profile = testimg, name },
}: BoardItemProps) => {
  const router = useRouter();
  // 글 작성페이지로 이동
  const handleRouteBoardDetail = (Board: number) => {
    router.push(`/board/${Board}`);
  };

  return (
    <div
      className="board__item__box"
      onClick={() => handleRouteBoardDetail(id)}
    >
      <div className="board__item__box__left">
        {/* 제목 */}
        <Text
          color="#fff"
          fontSize="1rem"
          fontWeight="600"
          className="board__item__box__over__text"
        >
          {title}
        </Text>

        {/* 내용 */}
        <Text
          color="#D9D9D9"
          fontSize="0.8125rem"
          fontWeight="500"
          className="board__item__box_content board__item__box__over__text"
        >
          {content}
        </Text>

        {/* 아래쪽 */}
        <div className="board__item__box__left_bottom">
          <div className="board__item__box__left_bottom_writer">
            <Image src={profile} alt="writerProfile" className="" />
            <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
              {name}
            </Text>
          </div>

          <Text color="#989898" fontSize="0.6875rem" fontWeight="500">
            {date}
          </Text>

          <div className="board__item__box__left_bottom_comment board__item__box__left_bottom_add_info">
            <Image src={IconComment} alt="comment" />
            <Text color="#fff" fontSize="0.6875rem" fontWeight="500">
              {comment}
            </Text>
          </div>
          <div className="board__item__box__left_bottom_hearts board__item__box__left_bottom_add_info">
            <Heart hearts={hearts} isHeart={isHeart} />
          </div>
        </div>
      </div>
      {contentImg && (
        <Image
          src={contentImg}
          alt="contentImg"
          className="home__content__meeting__right_img"
        />
      )}
    </div>
  );
};

export default BoardItem;
