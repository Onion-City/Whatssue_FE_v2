export interface MyPostProps {
  clubId?: number;
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

export interface ClubMember {
  memberName: string;
  memberProfileImage: string;
  role: 'MANAGER' | "MEMBER";
  memberIntro?: string;
  clubName: string;
  createAt: string;
}

export interface ClubJoin {
  id: number;
  clubId: number;
  userId: number;
  userName: string;
  createdAt: string;
}

export interface JoinRequestParam {
  clubId: number;
  clubJoinRequestId: number;
}