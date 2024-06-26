import replyIcon from "@/assets/images/reply.png";
import { IMAGES } from "@/constants/images";
import { useCommentDeleteMutation } from "@/hook/comment/useCommentDeleteMutation";
import { CommentsProps } from "@/types/comment";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Text } from "../text";
import "./Comment.css";

export function Comment({ item, onClick }: CommentsProps) {
  const path = usePathname();
  const pathProps = path.split("/").slice(1);
  const { mutate: deleteCommentMutate } = useCommentDeleteMutation({
    clubId: parseInt(pathProps[0], 10),
    postId: parseInt(pathProps[3], 10),
    commentId: item.commentId,
  });
  const handleDeleteComment = () => {
    deleteCommentMutate();
  };
  const handleReplyClick = () => {
    onClick(item.commentId);
  };
  return (
    <div className="comment__box">
      {item.parentId && (
        <div className="comment__box__is__reply">
          <Image src={replyIcon} alt="replyIcon" />
        </div>
      )}
      <div className="comment__box__wrapper">
        <div className="comment__box__profile">
          <Image src={IMAGES.closeBlack} alt="userProfile" />
          <div className="comment__box__info">
            <Text color="#fff" fontSize="0.8125rem" fontWeight="700">
              이름자리
            </Text>
            <Text color="#A2A2A2" fontSize="0.5625rem" fontWeight="500">
              {item.createdAt}
            </Text>
          </div>

          {/* 유저 정보 비교 후 동일하다면 */}
          {item.memberId && (
            <div className="comment__box__edit">
              <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
                수정
              </Text>
              <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
                |
              </Text>
              <Text
                color="#fff"
                fontSize="0.6875rem"
                fontWeight="600"
                onClick={handleDeleteComment}
              >
                삭제
              </Text>
            </div>
          )}
        </div>
        <div className="comment__box__margin__left">
          <div className="comment__box__content">
            <Text color="#fff" fontSize="0.8125rem" fontWeight="500">
              {item.content}
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
  );
}
