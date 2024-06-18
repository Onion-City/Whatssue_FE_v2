interface PostContent {
  postTitle: string;
  postContent: string;
  postCategory: "NOTICE" | "FREE";
}
interface imageState {
  url?: string;
  imageFile?: File;
}
export interface PostFormProps {
  clubId: number;
  request: PostContent;
  postImages?: imageState;
}
