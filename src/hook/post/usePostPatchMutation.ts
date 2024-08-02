import { http } from "@/apis/http";
import { FormatClubId, FormatPostId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
export const usePostPatchMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const clubId = FormatClubId();
  const postId = FormatPostId();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: (data: FormData) =>
      http.patch(`/clubs/${clubId}/posts/${postId}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postList"],
      });
      showToast({
        message: "게시글 수정 성공",
        type: "success",
      });
      router.back();
    },
    onError: (error) => {
      console.log("게시글 수정 실패", error);
      showToast({
        message: "게시글 수정 실패",
        type: "error",
      });
    },
  });
};
