export interface PostContent {
  postTitle: string;
  postContent: string;
  postCategory: "NOTICE" | "FREE";
}
export interface PostFormDatas {
  request: PostContent;
  postImages?: File[];
}
export interface PostFormProps {
  request: PostContent;
  postImages?: File[];
}
export interface PostDetailProps {
  clubId: number;
  postId: number;
}

export interface PostList {
  postId: number;
  writerProfileImage: string;
  writerName: string;
  postTitle: string;
  postContent: string;
  uploadImage: [string];
  postCategory: "NOTICE" | "FREE";
  postLikeCount: number;
  isLiked: boolean;
  commentCount: number;
  createdAt: Date;
}
