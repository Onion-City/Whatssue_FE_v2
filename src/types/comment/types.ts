import { PostDetailProps } from "../post";
export interface CommentkeyProps {
  clubId: number;
  postId: number;
  parentId?: number;
}
// 클럽 조회 페이지
export interface Comment {
  commentId: number;
  writerId: number;
  writerName: string;
  profileImage: string;
  postId: number;
  parentId: null | number;
  content: string;
  createdAt: string;
  updateAt: string;
  deleteAt: string | null;
}

export interface CommentData {
  postId: number;
  content: string;
  parentId?: number;
}
export interface CommantDeleteProps extends PostDetailProps {
  commentId: number;
}
export interface CommentsProps {
  targetCommentId?: number | undefined;
  item: Comment;
  onClick: (commentId: number) => void;
}

export interface CommentChildProps {
  page: number;
  size: number;
  clubId: number;
  parentId: number;
  postId: number;
}
// 정렬용
export interface CommentSortInterface extends Comment {
  replies: Comment[];
}
export interface CommentsListProps {
  commentCount: number;
  isTarget?: undefined;
}
