import { http } from "@/apis/http";
import { PostFormProps } from "@/types/post";
import { useMutation } from "@tanstack/react-query";

async function registePost(postData: PostFormProps) {
  const resData = new FormData();
  resData.append(
    "request",
    new Blob(
      [
        JSON.stringify({
          postTitle: postData.request.postTitle,
          postContent: postData.request.postContent,
          postCategory: postData.request.postCategory,
        }),
      ],
      { type: "application/json" }
    )
  );
  if (postData.postImages && postData.postImages.imageFile)
    resData.append("profileImage", postData.postImages.imageFile);

  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await http.post(
      `/clubs/${postData.clubId}/posts`,
      resData,
      config
    );
    console.log(res);
    return;
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
interface UseRegistePost {
  mutate: (data: PostFormProps) => void; // 매개변수 추가
}
export function usePostMutation(): UseRegistePost {
  const { mutate } = useMutation<void, Error, PostFormProps>({
    mutationFn: registePost,
    onSuccess: () => {
      console.log("게시글 등록 성공");
    },
    onError: (error) => {
      console.log("게시글 등록 실패", error);
    },
  });
  return { mutate };
}
