import { http } from "@/apis/http";
import { FormatClubId, FormatPostId } from "@/utils/extractPathElements";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
export const usePostPatchMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const clubId = FormatClubId();
  const postId = FormatPostId();
  return useMutation({
    mutationFn: (data: FormData) =>
      http.patch(`/clubs/${clubId}/posts/${postId}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postList"],
      });
      console.log("게시글 수정 성공");
      router.back();
    },
    onError: (error) => {
      console.log("게시글 수정 실패", error);
    },
  });
};
