import { Heart } from "@/components/atoms/heart/Heart";
import { Text } from "@/components/atoms/text";
import { ImageModal } from "@/components/molecules/ImageModal";
import { CommentList } from "@/components/molecules/commentList/CommentList";
import { BoardHeader } from "@/components/organisms/Header";
import usePostDetailQuery from "@/hook/post/usePostDetailQuery";
import { formatDateTime } from "@/utils/date";
import Image from "next/image";
import { useRef, useState } from "react";
import "./BoardDetail.css";
export const BoardDetail = () => {
  const { data, isLoading } = usePostDetailQuery();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const commentRef = useRef<any>({});
  const handleOffTargetComment = () => {
    commentRef.current.handleOffTargetComment();
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
  // 로딩 중일 때
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  // data가 undefined인 경우
  if (!data) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
  const DetailContent = data.data;
  return (
    <>
      <BoardHeader />
      <div className="board__detail__wrapper" onClick={handleOffTargetComment}>
        <div className="board__detail__content">
          <Text
            color="#fff"
            fontSize="1.1875rem"
            fontWeight="700"
            className="board__detail__title"
          >
            {DetailContent.postTitle}
          </Text>
          <div className="board__detail__info">
            <Image
              src={DetailContent.writerProfileImage}
              alt="userImg"
              width={100}
              height={100}
            />
            <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
              {DetailContent.writerName}
            </Text>
            <Text
              color="#D9D9D9"
              fontSize="0.6875rem"
              fontWeight="500"
              className="board__detail__info__date"
            >
              {formatDateTime(new Date(DetailContent.createdAt))}
            </Text>
          </div>
          <div className="board__detail__content__box__wrapper">
            <div className="board__detail__content__box__text">
              <Text color="#fff" fontSize="0.9375rem" fontWeight="500">
                {DetailContent.postContent}
              </Text>
            </div>
            <div className="board__detail__content__box__img__wrapper">
              {Object.keys(DetailContent.uploadImage).map((imgItem, index) => (
                <div
                  key={index}
                  className="board__detail__content__box__img"
                  onClick={() => handleOpenImg(index)}
                >
                  <Image
                    src={DetailContent.uploadImage[imgItem]}
                    alt={`contentImg-${imgItem}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            {isOpenModal && (
              <ImageModal
                imageList={Object.values(DetailContent.uploadImage)}
                clickIndex={currentIndex}
                onClose={handleCloseImg}
              />
            )}

            <div className="board__detail__hearts">
              <Heart
                hearts={DetailContent.postLikeCount}
                isHeart={DetailContent.isLiked}
                eventOn={true}
              />
            </div>
          </div>
        </div>
        <CommentList
          ref={commentRef}
          commentCount={DetailContent.commentCount}
        />
      </div>
    </>
  );
};
