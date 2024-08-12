import { CommonPage } from "../types";

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
  clubJoinRequestId?: number;
}

export interface MyCommentWrapperType {
  clubMemberImage: string;
  memberId: number;
  memberName: string;
  myCommentList: CommonPage<MyCommentContent>;
}

export interface MyCommentContent {
  comment: MyCommentDetail;
  post: MyCommentPost;
}

export interface MyCommentDetail {
  commentId: number;
  content: string;
  createAt: string;
  deleteAt?: string;
  parentId?: number;
  postId: number;
  profileImage: string;
  updateAt: string;
  writerId: number;
  writerName: string;
}

export interface MyCommentPost {
  commentCount: number;
  createdAt: string;
  isLiked: boolean;
  postCategory: "NOTICE" | "FREE";
  postContent: string;
  postId: number;
  postLikeCount: number;
  postTitle: string;
  uploadImage?: {};
  writerName: string;
  writerProfileImage: string;
}