interface PostContent {
  postTitle: string;
  postContent: string;
  postCategory: "NOTICE" | "FREE";
}
export interface PostFormProps {
  clubId: number;
  request: PostContent;
  postImages?: File[];
}
export interface PostDetailProps {
  clubId: number;
  postId: number;
}
