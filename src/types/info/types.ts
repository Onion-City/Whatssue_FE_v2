export interface MyPostProps {
  clubId: number;
  userId?: number;
  category?: "NOTICE" | "FREE";
  page: number;
  size: number;
  sort?: string;
}

export interface MyPostContent {
  postId: number;
  writerProfileImage: string;
  writerName: string;
  postTitle: string;
  postContent: string;
  uploadImage: string[] | null;
  postCategory: "NOTICE" | "FREE";
  postLikeCount: number;
  commentCount: number;
  isLiked: boolean;
  createdAt: string;
}