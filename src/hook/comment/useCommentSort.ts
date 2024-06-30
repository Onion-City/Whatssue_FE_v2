import { Comment as CommentProps } from "@/types/comment";

interface CommentSortInterface extends CommentProps {
  replies: CommentProps[];
}
export const useCommentSort = (comentArr: CommentProps[] | undefined) => {
  if (comentArr == undefined) {
    return;
  }
  const structuredComments: CommentSortInterface[] = [];
  const sortedComments = comentArr.sort((a, b) => {
    if (a.parentId === null && b.parentId !== null) return -1;
    if (a.parentId !== null && b.parentId === null) return 1;
    return 0;
  });

  sortedComments.forEach((comment) => {
    if (comment.parentId === null) {
      structuredComments.push({
        ...comment,
        replies: [],
      });
    } else {
      const parentIndex = structuredComments.findIndex(
        (c) => c.commentId === comment.parentId
      );
      if (parentIndex !== -1) {
        structuredComments[parentIndex].replies.push(comment);
      }
    }
  });
  console.log(structuredComments);
  return structuredComments;
};
