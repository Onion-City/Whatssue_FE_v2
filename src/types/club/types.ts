import { PageAble } from "../pages";

// 클럽 기본 구조
export interface Club {
  clubId: number;
  clubName: string;
  clubProfileImage: string;
  createdAt: string;
  role: "MANAGER" | "MEMBER";
  memberCount?: number;
}

//   memberCount
export interface GetClubListResponse {
  data: {
    content: Club[];
    pageable: PageAble;
    last: false;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: {
      empty: false;
      sorted: true;
      unsorted: false;
    };
    first: true;
    numberOfElements: number;
    empty: false;
  };
}

export interface GetRequestedJoinListResponse {
  data: {
    content: RequestedJoinClubInfo[];
    pageable: PageAble;
  };
}

export interface RequestedJoinClubInfo {
  clubJoinRequestId: number;
  clubId: number;
  clubName: string;
  status: "WAITING" | "REJECTED" | "ACCEPTED" | "CANCELED";
  updatedAt: string;
}
export enum ApprovalStatus {
  Approved = "ACCEPTED",
  Waiting = "WAITING",
  Rejected = "REJECTED",
}

// 클럽 생성 폼
interface imageState {
  url?: string;
  imageFile?: File;
}

export interface ClubFormData {
  clubName: string;
  clubIntro: string;
  isPrivate: boolean;
  namePolicy: "REAL_NAME" | "NICK_NAME";
  contactMeans: string;
  link: string[];
  profileImage?: imageState;
}