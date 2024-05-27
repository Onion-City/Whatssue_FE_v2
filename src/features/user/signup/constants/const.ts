export const SIGNUP_TITLE = "추가 정보 입력";

export const SIGNUP_INPUT_ARR = [
    {
        title: "회원 이름",
        type: "input",
        essential: true,
        name: "userName"
    },
    {
        title: "회원 이메일",
        type: "input",
        essential: true,
        name: "userEmail"
    },
    {
        title: "회원 전화번호",
        type: "btnInput",
        essential: true,
        name: "userPhone"
    }
]

export const SIGNUP_BTN = {
    getNum: "인증번호 받기",
    checkNum: "인증번호 확인",
    retryNum: "재전송",
    complete: "회원 가입"
};

export const SIGNUP_COMPLETE_TXT = [
    "김준영님 환영합니다!",
    "다양한 모임을 즐겨보세요!"
];

export const SIGNUP_COMPLETE_BTN = "왓슈 사용하기";
