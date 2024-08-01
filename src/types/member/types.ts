export interface MemeberPages {
  page: number;
  size: number;
}
export interface MemberAuthInfo {
  memberId: number;
  memberName: string;
  memberProfileImage: string;
  role: "MEMBER" | "MANAGER";
  clubProfileImage: string;
  clubName: string;
  namePolicy: "REAL_NAME" | "NICK_NAME";
}
export interface MemberInfo {
  memberId: number;
  memberName: string;
  memberIntro: null | string;
  role: "MANAGER" | "MEMBER";
  memberImage: string;
}

export interface MemberProfile {
  memberId: number;
  memberName: string;
  memberIntro: null | string;
  role: "MANAGER" | "MEMBER";
  clubName: string;
  userEmail: string;
  userPhone: string;
  profileImage: string; //memberImage
}

export interface MyProfile {
  memberId: number;
  memberName: string;
  memberIntro: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  role: "MANAGER" | "MEMBER";
  isEmailPublic: boolean;
  isPhonePublic: boolean;
  profileImage: string;
}

export interface MemberProfileUpdataMid extends MemberProfileUpdata {
  memberId: number; //수정중에 사용자 눈에 보이는 부분
  userEmail: string;
  userPhone: string;
}
export interface MemberProfileUpdata {
  memberName: string;
  memberIntro: string;
  isEmailPublic: boolean;
  isPhonePublic: boolean;
  profileImage: string | File;
  isProfileImageChanged: boolean;
}
