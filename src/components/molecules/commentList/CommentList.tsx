import { CommentInput } from "@/components/atoms/comment";
import { CommentItem } from "@/components/atoms/comment/CommentItem";
import { Text } from "@/components/atoms/text";
import useCommentsQuery from "@/hook/comment/useCommentsQuery";
import { CommentsListProps } from "@/types/comment";
import { FormatClubId, FormatPostId } from "@/utils/extractPathElements";
import React, { useImperativeHandle, useState } from "react";
export const CommentList = React.forwardRef(
  ({ commentCount }: CommentsListProps, ref) => {
    const { data: commentList } = useCommentsQuery({
      clubId: FormatClubId(),
      postId: FormatPostId(),
      size: 100,
      page: 0,
    });
    const [targetComment, setTargetComment] = useState<undefined | number>(
      undefined
    );
    const handleTargetComment = (commentId: number) => {
      setTargetComment(commentId);
    };
    const handleOffTargetComment = () => {
      setTargetComment(undefined);
    };
    useImperativeHandle(ref, () => ({
      handleOffTargetComment: () => handleOffTargetComment(),
    })); //부모 컴포넌트로 토스
    return (
      <>
        <div className="board__detail__comment__warpper" />
        <div className="board__detail__comment">
          <div className="board__detail__comment__count">
            <Text color="#fff" fontSize="0.9375rem" fontWeight="700">
              댓글 {commentCount}
            </Text>
          </div>
          <div>
            {commentList?.data.content &&
              commentList.data.content.slice().map((comment, index: number) => (
                <div key={index}>
                  <CommentItem
                    item={comment}
                    onClick={handleTargetComment}
                    targetCommentId={targetComment}
                  />
                </div>
              ))}
          </div>
        </div>
        <CommentInput parentId={targetComment} />
      </>
    );
  }
);
CommentList.displayName = "CommentList";
