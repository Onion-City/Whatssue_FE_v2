import { PostUpdataFormProps } from "@/types/post";

export const ModifyPostFormData = (postData: PostUpdataFormProps) => {
  const resData = new FormData();
  resData.append(
    "postRequest",
    new Blob([JSON.stringify(postData.postRequest)], {
      type: "application/json",
    })
  );
  if (Array.isArray(postData.postImages) && postData.postImages.length > 0) {
    postData.postImages.forEach((file) => {
      resData.append(`postImages`, file);
    });
  } else {
    resData.append(`postImages`, new Blob([], { type: "application/json" }));
  }
  return resData;
};
