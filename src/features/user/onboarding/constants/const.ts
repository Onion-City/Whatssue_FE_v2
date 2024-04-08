export const ONBOARDING_INPUT_ARR = {
    nickname : [
        {
            title: "닉네임",
            maxCnt: 20,
            type: "input",
            essential: true,
            name: "nickname"
        },
        {
            title: "한 줄 소개",
            maxCnt: 30,
            type: "input",
            essential: false,
            name: "introduce"
        },
        {
            title: "이메일 공개 여부",
            type: "toggle",
            subtitle: "이메일 공개 여부 마이페이지에서 변경할 수 있어요",
            essential: true,
            name: "emailPublic"
        },
        {
            title: "전화번호 공개 여부",
            type: "toggle",
            subtitle: "전화번호 공개 여부는 마이페이지에서 변경할 수 있어요",
            essential: true,
            name: "mobilePublic"
        }
    ],
    realname : [
        {
            title: "이름",
            maxCnt: 10,
            subtitle: "이 모임은 실명으로만 활동할 수 있어요 (이름 변경 불가)",
            type: "input",
            essential: true,
            name: "name"
        },
        {
            title: "한 줄 소개",
            maxCnt: 30,
            type: "input",
            essential: false,
            name: "introduce"
        },
        {
            title: "이메일 공개 여부",
            type: "toggle",
            subtitle: "이메일 공개 여부 마이페이지에서 변경할 수 있어요",
            essential: true,
            name: "emailPublic"
        },
        {
            title: "전화번호 공개 여부",
            type: "toggle",
            subtitle: "전화번호 공개 여부는 마이페이지에서 변경할 수 있어요",
            essential: true,
            name: "mobilePublic"
        }
    ]
}

export const ONBOARDING_BTN = "프로필 생성하기"