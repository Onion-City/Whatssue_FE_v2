import { http } from "@/apis/http";
import { PostFormProps } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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
  if (postData.postImages && postData.postImages.length > 0) {
    postData.postImages.forEach((file) => {
      resData.append(`postImages`, file);
    });
  }

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
  mutate: (data: PostFormProps) => void;
}
export function usePostMutation(): UseRegistePost {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate } = useMutation<void, Error, PostFormProps>({
    mutationFn: registePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postList"],
      });
      console.log("게시글 등록 성공");
      router.back();
    },
    onError: (error) => {
      console.log("게시글 등록 실패", error);
    },
  });
  return { mutate };
}
