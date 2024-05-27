export const REGISTER_INPUT_ARR = [
    {
      title: "모임 이름",
      maxCnt: 20,
      type: "input",
      essential: true,
      name: "clubName"
    },
    {
      title: "모임 소개",
      maxCnt: 300,
      type: "textarea",
      essential: true,
      name: "clubIntro"
    },
    {
      title: "모집 여부",
      type: "toggle",
      subtitle: "모집 여부는 설정에서 변경할 수 있어요",
      essential: true,
      name: "isPrivate"
    },
    {
      title: "회원명 설정",
      type: "chip",
      subtitle: "회원명 설정은 최초 설정 이후에 변경할 수 없어요",
      essential: true,
      name: "namePolicy"
    }
];

export const REGISTER_INPUT_ARR2 = [
  {
    title: "모임 대표 사진",
    type: "fileUpload",
    name: "profileImage",
    essential: false
  },
  {
    title: "대표 연락 수단",
    type: "input",
    maxCnt: 30,
    name: "contactMeans",
    essential: false,
    // subtitle: "전화번호, 이메일, sns 등",
    content: "예시) 010-7330-9731"
  },
  {
    title: "모임 관련 링크",
    type: "textarea",
    name: "clubLinks",
    essential: false,
    subtitle: "notion, 디스코드, 오픈 채팅방 등",
    maxCnt: 300
  },
]

export const REGISTER_CHIP_ARR = [
    "실명제",
    "닉네임제"
];

export const REGISTER_COMPLETE_ARR = [
  "모임이 생성되었어요!",
  "회원들을 초대하고 손쉽게 모임을 관리해보세요"
];

export const REGISTER_BTN = {
    next: "다음",
    complete: "모임 생성하기",
    prev: "이전",
    home: "홈으로",
    toClub: "모임으로 이동"
}