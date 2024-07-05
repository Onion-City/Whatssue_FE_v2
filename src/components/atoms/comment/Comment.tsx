import replyIcon from "@/assets/images/reply.png";
import { ICONS } from "@/constants/images";
import { useCommentDeleteMutation } from "@/hook/comment/useCommentDeleteMutation";
import { CommentsProps } from "@/types/comment";
import { formatDateTime } from "@/utils/date";
import { formatClubId, formatPostId } from "@/utils/extractPathElements";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../modal";
import { Text } from "../text";
import "./Comment.css";

export function Comment({ item, targetCommentId, onClick }: CommentsProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { mutate: deleteCommentMutate } = useCommentDeleteMutation({
    clubId: formatClubId(),
    postId: formatPostId(),
    commentId: item.commentId,
  });
  const handleIsDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };
  const handleDelete = () => {
    setIsOpenDeleteModal(false);
    deleteCommentMutate();
  };
  const handleReplyClick = () => {
    setIsOpenModal(true);
  };
  const handleReplyTarget = () => {
    setIsOpenModal(false);
    onClick(item.commentId);
  };
  const commentData = formatDateTime(new Date(item.createdAt));
  const handle = (e: React.MouseEvent) => {
    if (targetCommentId === undefined || targetCommentId === item.commentId)
      e.stopPropagation();
  };
  return (
    <div
      className={`comment__box ${targetCommentId === item.commentId ? "comment__box__point" : ""}`}
      onClick={handle}
    >
      <div className="comment__box__inner">
        {item.parentId && (
          <div className="comment__box__is__reply">
            <Image src={replyIcon} alt="replyIcon" />
          </div>
        )}
        <div className="comment__box__wrapper">
          <div className="comment__box__profile">
            <Image
              src={item.profileImage || ICONS.memberProfileNone}
              alt="userProfile"
              width={50}
              height={50}
            />
            <div className="comment__box__info">
              <Text color="#fff" fontSize="0.8125rem" fontWeight="700">
                {item.writerName || "익명"}
              </Text>
              <Text color="#A2A2A2" fontSize="0.5625rem" fontWeight="500">
                {commentData === "1970년 1월 1일 9:00" ? "\u00A0" : commentData}
              </Text>
            </div>

            {/* 유저 정보 비교 후 동일하다면 */}
            {item.writerId && (
              <div className="comment__box__edit">
                <Text
                  color="#fff"
                  fontSize="0.6875rem"
                  fontWeight="600"
                  onClick={handleIsDeleteModal}
                >
                  삭제
                </Text>
              </div>
            )}
          </div>
          <div className="comment__box__margin__left">
            <div className="comment__box__content">
              <Text color="#fff" fontSize="0.8125rem" fontWeight="500">
                {item.content || "삭제된 댓글입니다."}
              </Text>
            </div>
            {!item.parentId && (
              <div className="comment__box__creat__reply ">
                <Text
                  color="#BFBFBF"
                  fontSize="0.8125rem"
                  fontWeight="500"
                  onClick={handleReplyClick}
                >
                  답글 쓰기
                </Text>
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal
          title="대댓글을 작성하시겠습니까?"
          agree="확인"
          denial="취소"
          agreeVoid={handleReplyTarget}
          denialVoid={() => setIsOpenModal(false)}
        />
      )}
      {isOpenDeleteModal && (
        <Modal
          title="삭제하시겠습니까?"
          agree="확인"
          denial="취소"
          agreeVoid={handleDelete}
          denialVoid={() => setIsOpenDeleteModal(false)}
        />
      )}
    </div>
  );
}
