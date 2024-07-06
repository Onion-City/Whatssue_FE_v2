import { http } from "@/apis/http";
import { FormatClubId, FormatPostId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePostDeleteMutation = () => {
  const clubId = FormatClubId();
  const postId = FormatPostId();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: () => http.delete(`/clubs/${clubId}/posts/${postId}`),
    onSuccess: () => {
      showToast({
        message: "게시글 삭제 성공",
        type: "success",
      });
      router.back();
      queryClient.invalidateQueries({
        queryKey: ["postList"],
      });
    },
    onError: (error) => {
      console.log("게시글 삭제 실패", error);
      showToast({
        message: "게시글 삭제 실패",
        type: "error",
      });
    },
  });
};
