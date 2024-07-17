export const MEMBERPROFILE_TITLE = "프로필 사진";

export const MEMBERPROFILE_INPUT_ARR = [
  // {
  //   type: "fileUpload",
  //   name: "profileImage",
  //   essential: false,
  // },
  {
    title: "이름",
    maxCnt: 10,
    type: "input",
    essential: true,
    name: "memberName",
  },
  {
    title: "한 줄 소개",
    maxCnt: 30,
    type: "input",
    essential: false,
    name: "memberIntro",
  },
  {
    title: "전화번호 | 공개 여부",
    type: "input&&toggle",
    essential: true,
    name: "userPhone",
    addName: "isPhonePublic",
  },
  {
    title: "이메일 | 공개 여부",
    type: "input&&toggle",
    essential: true,
    name: "userEmail",
    addName: "isEmailPublic",
  },
];

export const MEMBERPROFILE_BTN = "수정 완료";
