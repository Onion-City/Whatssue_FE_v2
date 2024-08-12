import { CommentInput } from "@/components/atoms/comment";
import { CommentItem } from "@/components/atoms/comment/CommentItem";
import { Text } from "@/components/atoms/text";
import useCommentsQuery from "@/hook/comment/useCommentsQuery";
import { CommentsListProps } from "@/types/comment";
import { FormatClubId, FormatPostId } from "@/utils/extractPathElements";
import { useScrollHandler } from "@/utils/useScrollHandler";
import React, { useImperativeHandle, useState } from "react";
export const CommentList = React.forwardRef(
  ({ commentCount }: CommentsListProps, ref) => {
    const {
      data: commentList,
      fetchNextPage,
      hasNextPage,
    } = useCommentsQuery({
      clubId: FormatClubId(),
      postId: FormatPostId(),
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
    const handleMoreNextComment = () => {
      if (hasNextPage) fetchNextPage();
    };
    const targetRef = useScrollHandler(handleMoreNextComment);
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
            {commentList?.pages.flatMap((page) => page.content) &&
              commentList?.pages
                .flatMap((page) => page.content)
                .slice()
                .map((comment, index: number) => (
                  <div key={index}>
                    <CommentItem
                      item={comment}
                      onClick={handleTargetComment}
                      targetCommentId={targetComment}
                    />
                  </div>
                ))}
            <div ref={targetRef} style={{ height: "1px" }} />
            {/* 해당을 통해 끝라인 확인 */}
          </div>
        </div>
        <CommentInput parentId={targetComment} />
      </>
    );
  }
);
CommentList.displayName = "CommentList";
