// 클럽 조회 페이지
export interface JoinClub {
  clubId: number;
  clubProfileImage: string;
  clubName: string;
  clubMemberCount: number;
  namePolicy: "REAL_NAME" | "NIKE_NAME";
  createdAt: string;
  clubIntro: string;
}

export interface JoinRequest {
  clubJoinRequestId: number;
  rejectionReason: string;
}
