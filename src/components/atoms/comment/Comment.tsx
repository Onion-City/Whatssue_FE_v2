import replyIcon from "@/assets/images/reply.png";
import Image, { StaticImageData } from "next/image";
import { Text } from "../text";
import "./Comment.css";
export interface CommentProps {
  commentId: number;
  createdAt: string;
  isEditAllowed: boolean; //댓글 작성자와 동일일 경우 수정
  memberInfo: {
    profile: StaticImageData;
    name: string;
  };
  content: string;
  parentId?: number; //대댓글일경우 필요
  reply?: boolean; // 대댓글일 경우 true
  onClick?: () => void; //대댓글 작성 핸들러
}

export function Comment({
  commentId,
  createdAt,
  isEditAllowed,
  memberInfo: { profile, name },
  content,
  parentId,
  reply,
  onClick,
}: CommentProps) {
  return (
    <div className="comment__box">
      {reply && (
        <div className="comment__box__is__reply">
          <Image src={replyIcon} alt="replyIcon" />
        </div>
      )}
      <div className="comment__box__wrapper">
        <div className="comment__box__profile">
          <Image src={profile} alt="userProfile" />
          <div className="comment__box__info">
            <Text color="#fff" fontSize="0.8125rem" fontWeight="700">
              {name}
            </Text>
            <Text color="#A2A2A2" fontSize="0.5625rem" fontWeight="500">
              {createdAt}
            </Text>
          </div>

          {/* 유저 정보 비교 후 동일하다면 */}
          {isEditAllowed && (
            <div className="comment__box__edit">
              <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
                수정
              </Text>
              <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
                |
              </Text>
              <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
                삭제
              </Text>
            </div>
          )}
        </div>
        <div className="comment__box__margin__left">
          <div className="comment__box__content">
            <Text color="#fff" fontSize="0.8125rem" fontWeight="500">
              {content}
            </Text>
          </div>
          {!reply && (
            <div className="comment__box__creat__reply ">
              <Text color="#BFBFBF" fontSize="0.8125rem" fontWeight="500">
                답글 쓰기
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
