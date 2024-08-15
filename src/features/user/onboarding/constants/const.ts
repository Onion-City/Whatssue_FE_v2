export const ONBOARDING_INPUT_ARR = {
  nickname: [
    {
      title: "닉네임",
      maxCnt: 20,
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
      title: "이메일 공개 여부",
      type: "toggle",
      subtitle: "이메일 공개 여부 마이페이지에서 변경할 수 있어요",
      essential: true,
      name: "isEmailPublic",
    },
    {
      title: "전화번호 공개 여부",
      type: "toggle",
      subtitle: "전화번호 공개 여부는 마이페이지에서 변경할 수 있어요",
      essential: true,
      name: "isPhonePublic",
    },
  ],
  realname: [
    {
      title: "이름",
      maxCnt: 10,
      subtitle: "이 모임은 실명으로만 활동할 수 있어요 (이름 변경 불가)",
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
      title: "이메일 공개 여부",
      type: "toggle",
      subtitle: "이메일 공개 여부 마이페이지에서 변경할 수 있어요",
      essential: true,
      name: "isEmailPublic",
    },
    {
      title: "전화번호 공개 여부",
      type: "toggle",
      subtitle: "전화번호 공개 여부는 마이페이지에서 변경할 수 있어요",
      essential: true,
      name: "isPhonePublic",
    },
  ],
};

export const ONBOARDING_BTN = "프로필 생성하기";
