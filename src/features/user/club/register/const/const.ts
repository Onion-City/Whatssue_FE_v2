export const REGISTER_INPUT_ARR = [
    {
      title: "모임 이름",
      maxCnt: 20,
      type: "input",
      essential: true
    },
    {
      title: "모임 소개",
      maxCnt: 300,
      type: "textarea",
      essential: true
    },
    {
      title: "모집 여부",
      type: "toggle",
      subtitle: "모집 여부는 설정에서 변경할 수 있어요",
      essential: true
    },
    {
      title: "회원명 설정",
      type: "chip",
      subtitle: "회원명 설정은 최초 설정 이후에 변경할 수 없어요",
      essential: true
    }
  ];

export const REGISTER_CHIP_ARR = [
    "실명제",
    "닉네임제"
];

export const REGISTER_BTN = {
    next: "다음",
}