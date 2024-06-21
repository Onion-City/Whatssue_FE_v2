export const REGISTER_INPUT_ARR = {
  TITLE: {
    title: "",
    maxCnt: 20,
    type: "input",
    essential: false,
    name: "request.postTitle",
    content: "제목",
  },
  CONTENT: {
    title: "",
    maxCnt: 300,
    type: "textarea",
    essential: false,
    name: "request.postContent",
    content: "내용을 입력하세요.",
  },
  CATEGORY: {
    name: "request.postCategory",
    content: "카테고리",
    FREE: "자유",
    NOTICE: "공지",
  },
  CLUBID: {
    name: "request.clubId",
  },
  IMGCONTENT: {
    title: "",
    type: "fileUpload",
    essential: false,
    name: "request.postImages",
    content: "사진 첨부하기 (최대 10개)",
    alert: "이미지는 최대 10장까지 첨부할 수 있습니다.",
  },
};
