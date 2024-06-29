import { CommentInput } from "@/components/atoms/comment/index";
import { Heart } from "@/components/atoms/heart/Heart";
import { Text } from "@/components/atoms/text";
import { ImageModal } from "@/components/molecules/ImageModal";
import { CommentList } from "@/components/molecules/commentList/CommentList";
import { BoardHeader } from "@/components/organisms/Header";
import { useCommentSort } from "@/hook/comment/useCommentSort";
import useCommentsQuery from "@/hook/comment/useCommentsQuery";
import usePostDetailQuery from "@/hook/post/usePostDetailQuery";
import {
  useHeartCancleMutation,
  useHeartMutation,
} from "@/hook/post/useheartMutation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./BoardDetail.css";
export const BoardDetail = () => {
  const pathname = usePathname();
  const pathProps = pathname.split("/").slice(1);
  const postItem = {
    clubId: parseInt(pathProps[0], 10),
    postId: parseInt(pathProps[3], 10),
  };
  const { data, isLoading } = usePostDetailQuery(postItem);
  const { mutate: isHaertMutate } = useHeartMutation(postItem);
  const { mutate: isCancelHaertMutate } = useHeartCancleMutation(postItem);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [targetComment, setTargetComment] = useState<undefined | number>(
    undefined
  );
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const handleTargetComment = (commentId: number) => {
    setTargetComment(commentId);
  };
  const handleIsHeart = () => {
    data && !data.data.isLiked ? isHaertMutate() : isCancelHaertMutate();
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
  const { data: commentList } = useCommentsQuery({
    clubId: parseInt(pathProps[0], 10),
    postId: parseInt(pathProps[3], 10),
    size: 100,
    page: 0,
  });
  const structuredComments = useCommentSort(commentList?.data.content);
  // 로딩 중일 때
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  // data가 undefined인 경우
  if (!data) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
  console.log("dkdkdkdk", targetComment);
  const DetailContent = data.data;
  return (
    <>
      <BoardHeader></BoardHeader>
      <>
        <div className="board__detail__wrapper">
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
              {DetailContent.createdAt}
            </Text>
          </div>
          <div className="board__detail__content__box__wrapper">
            <div className="board__detail__content__box__text">
              <Text color="#fff" fontSize="0.9375rem" fontWeight="500">
                {DetailContent.postContent}
              </Text>
            </div>
            <div className="board__detail__content__box__img__wrapper">
              {DetailContent.uploadImage?.map((imgItem, index) => (
                <div
                  key={index}
                  className="board__detail__content__box__img"
                  onClick={() => handleOpenImg(index)}
                >
                  <Image
                    src={imgItem}
                    alt="contentImg"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            {isOpenModal && (
              <ImageModal
                imageList={DetailContent.uploadImage}
                clickIndex={currentIndex}
                onClose={handleCloseImg}
              />
            )}

            <div className="board__detail__hearts">
              <Heart
                hearts={DetailContent.postLikeCount}
                isHeart={DetailContent.isLiked}
                eventOn={true}
                onClick={handleIsHeart}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            minWidth: "100%",
            background: "#373737",
            minHeight: "0.875rem",
            margin: "0.87rem 0",
          }}
        />
        <div className="board__detail__wrapper">
          <div className="board__detail__comment">
            <Text color="#fff" fontSize="0.9375rem" fontWeight="700">
              댓글 {DetailContent.commentCount}
            </Text>
            <div>
              {structuredComments &&
                structuredComments
                  .slice()
                  .reverse()
                  .map((comment, index: number) => (
                    <CommentList
                      key={index}
                      item={comment}
                      onClick={handleTargetComment}
                      replies={comment.replies}
                    />
                  ))}
            </div>
          </div>
        </div>
        <CommentInput parentId={targetComment} />
      </>
    </>
  );
};
