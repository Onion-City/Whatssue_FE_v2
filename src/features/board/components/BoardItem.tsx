"use client";

import { Heart } from "@/components/atoms/heart/Heart";
import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { formatDateTime } from "@/utils/date";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import "./BoardItem.css";
import { BoardItemProps } from "./BoardItemProps";

const BoardItem = ({
  id,
  title,
  content,
  commentCount,
  hearts,
  contentImgs,
  createdAt,
  isHeart = false,
  writer: { profile, name },
}: BoardItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  // 글 작성페이지로 이동
  const handleRouteBoardDetail = (BoardId: number) => {
    router.push(`${pathname}/${BoardId}`);
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
            <Image
              src={profile}
              alt="writerProfile"
              className=""
              width={100}
              height={100}
            />
            <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
              {name}
            </Text>
          </div>

          <Text color="#989898" fontSize="0.6875rem" fontWeight="500">
            {formatDateTime(new Date(createdAt))}
          </Text>

          <div className="board__item__box__left_bottom_comment board__item__box__left_bottom_add_info">
            <Image src={ICONS.comment} alt="comment" width={100} height={100} />
            <Text color="#fff" fontSize="0.6875rem" fontWeight="500">
              {commentCount}
            </Text>
          </div>
          <div className="board__item__box__left_bottom_hearts board__item__box__left_bottom_add_info">
            <Heart hearts={hearts} isHeart={isHeart} />
          </div>
        </div>
      </div>
      {contentImgs !== undefined && contentImgs.length > 0 && (
        <Image
          src={contentImgs[0]}
          alt="contentImg"
          className="home__content__meeting__right_img"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};

export default BoardItem;
