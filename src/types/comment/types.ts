import { PostDetailProps } from "../post";

// 클럽 조회 페이지
export interface Comment {
  commentId: number;
  memberId: number;
  postId: number;
  parentId: null | number;
  content: string;
  createdAt: string;
  updateAt: string;
}

export interface CommentData {
  postId: number;
  content: string;
  parentId?: number;
}
export interface CommantDeleteProps extends PostDetailProps{
  commentId: number;
}
export interface CommentsProps {
  item: Comment;
  onClick: (commentId: number) => void;
}
export interface CommentsListProps {
  item: Comment;
  replies?: Comment[];
  onClick: (commentId: number) => void;
}

