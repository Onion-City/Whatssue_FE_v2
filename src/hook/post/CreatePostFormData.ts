import { PostFormProps } from "@/types/post";

export const CreatePostFormData = (postData: PostFormProps) => {
  const resData = new FormData();
  resData.append(
    "request",
    new Blob([JSON.stringify(postData.request)], { type: "application/json" })
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
