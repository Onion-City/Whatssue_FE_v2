import useCommentsChildQuery from "@/hook/comment/useCommentsChildQuery";
import { CommentsProps } from "@/types/comment";
import { formatClubId, formatPostId } from "@/utils/extractPathElements";
import { Comment } from "./Comment";

// 댓글 하나에 대한 대댓글 리스트 포함
export const CommentItem = ({
  item,
  targetCommentId,
  onClick,
}: CommentsProps) => {
  const { data: commentChild } = useCommentsChildQuery({
    parentId: item.commentId,
    clubId: formatClubId(),
    postId: formatPostId(),
    size: 10,
    page: 0,
  });
  return (
    <>
      <Comment
        item={item}
        onClick={onClick}
        targetCommentId={targetCommentId}
      />
      {commentChild?.data.content &&
        commentChild.data.content
          .slice()
          .map((comment, index: number) => (
            <Comment key={index} item={comment} onClick={onClick} />
          ))}
    </>
  );
};
