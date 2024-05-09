import { Comment, CommentInput } from "@/components/atoms/comment/index";
import { Heart } from "@/components/atoms/heart/Heart";
import { Text } from "@/components/atoms/text";
import { ImageModal } from "@/components/molecules/ImageModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BoardDetailArr, commentsArr } from "../constants/testArr/TestArr";
import "./BoardDetail.css";
export const BoardDetail = () => {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const handleIsHeart = () => {
    // 좋아요 요청 보내기
  };
  const handleOpenImg = (index: number) => {
    // 사진 크게 보기
    setIsOpenModal(true);
    setCurrentIndex(index);
  };
  const handleCloseImg = () => {
    // 사진 모달 닫기
    setIsOpenModal(false);
  };

  //   title,
  //   content,
  //   date,
  //   comment,
  //   hearts,
  //   contentImgs,
  //   isHeart = false,
  //   writer: { profile = testimg, name },
  // }: BoardItemProps
  return (
    <>
      <div className="board__detail__wrapper">
        <Text
          color="#fff"
          fontSize="1.1875rem"
          fontWeight="700"
          className="board__detail__title"
        >
          {BoardDetailArr.title}
        </Text>
        <div className="board__detail__info">
          <Image src={BoardDetailArr.writer.profile} alt="userImg" />
          <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
            {BoardDetailArr.writer.name}
          </Text>
          <Text
            color="#D9D9D9"
            fontSize="0.6875rem"
            fontWeight="500"
            className="board__detail__info__date"
          >
            {BoardDetailArr.date}
          </Text>
        </div>
        <div className="board__detail__content__box__wrapper">
          <div className="board__detail__content__box__text">
            <Text color="#fff" fontSize="0.9375rem" fontWeight="500">
              {BoardDetailArr.content}
            </Text>
          </div>
          <div className="board__detail__content__box__img__wrapper">
            {BoardDetailArr.contentImgs?.map((imgItem, index) => (
              <div
                key={index}
                className="board__detail__content__box__img"
                onClick={() => handleOpenImg(index)}
              >
                <Image src={imgItem} alt="contentImg" />
              </div>
            ))}
          </div>
          {isOpenModal && (
            <ImageModal
              imageList={BoardDetailArr.contentImgs}
              clickIndex={currentIndex}
              onClose={handleCloseImg}
            />
          )}

          <div className="board__detail__hearts">
            <Heart
              hearts={BoardDetailArr.hearts}
              isHeart={BoardDetailArr.isHeart}
              eventOn={true}
              onClick={handleIsHeart}
            />
          </div>
          <div className="board__detail__comment">
            <Text color="#fff" fontSize="0.9375rem;" fontWeight="700">
              댓글 {BoardDetailArr.comment}
            </Text>
            <div>
              {commentsArr.map((comment, index: number) => (
                <Comment
                  key={index}
                  commentId={comment.commentId}
                  createdAt={comment.createdAt}
                  isEditAllowed={comment.isEditAllowed}
                  memberInfo={comment.memberInfo}
                  content={comment.content}
                  parentId={comment.parentId}
                  reply={comment.reply}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CommentInput />
    </>
  );
};
