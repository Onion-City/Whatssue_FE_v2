import { Comment } from "@/components/atoms/comment";
import { CommentsListProps } from "@/types/comment";

export const CommentList = ({ item, replies, onClick }: CommentsListProps) => {
  return (
    <>
      <Comment item={item} onClick={onClick} />
      {replies &&
        replies
          .slice()
          .reverse()
          .map((comment, index: number) => (
            <Comment key={index} item={comment} onClick={onClick} />
          ))}
    </>
  );
};
