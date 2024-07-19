import { MemberProfileUpdata } from "@/types/member";

export const ModifyPostFormData = (
  propData: MemberProfileUpdata,
  isChange: boolean
) => {
  const resData = new FormData();
  resData.append("memberName", propData.memberName);
  resData.append("memberIntro", propData.memberIntro);
  resData.append("isEmailPublic", String(propData.isEmailPublic));
  resData.append("isPhonePublic", String(propData.isPhonePublic));
  if (isChange) {
    resData.append("isProfileImageChanged", String(true));
    resData.append("profileImage", propData.profileImage);
  } else {
    resData.append("isProfileImageChanged", String(false));
  }
  return resData;
};
