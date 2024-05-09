export const MEMBERPROFILE_TITLE = "프로필 사진"
export const MEMBERPROFILE_INPUT_ARR = [
  {
    title: "이름",
    maxCnt: 10,
    type: "input",
    essential: true,
    name: "name",
  },
  {
    title: "한 줄 소개",
    maxCnt: 30,
    type: "input",
    essential: false,
    name: "introduce",
  },
  {
    title: "전화번호 | 공개 여부",
    type: "input&&toggle",
    essential: true,
    name: "mobilePublic",
  },
  {
    title: "이메일 | 공개 여부",
    type: "input&&toggle",
    essential: true,
    name: "emailPublic",
  },
];

export const MEMBERPROFILE_BTN = "수정 완료";
