export const ACCOUNT_INFO = {
  title: "계정 정보",
  edit: "편집",
  email: "이메일",
  phoneNum: "휴대폰 번호",
};

export const ACCOUNT_SETTING = {
  logout: "로그아웃",
  withdrawal: "회원탈퇴",
  whatssueVer: "Whatssue ver 1.0.0",
};

export const EDIT_ACCOUNT_INFO = "계정 정보 수정";

export const EDIT_ACCOUNT_INFO_INPUT_ARR = [
  {
    title: "이름",
    type: "input",
    essential: true,
    name: "userName",
  },
  {
    title: "이메일",
    type: "input",
    essential: true,
    name: "userEmail",
  },
  {
    title: "휴대폰 번호",
    type: "btnInput",
    essential: true,
    name: "userPhone",
  },
];

export const EDIT_ACCOUNT_INFO_BTN = {
  getNum: "인증번호 받기",
  checkNum: "인증번호 확인",
  retryNum: "재전송",
  complete: "수정 완료",
};
