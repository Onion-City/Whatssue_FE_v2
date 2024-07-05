import { http } from "@/apis/http";
import { formatClubId, formatPostId } from "@/utils/extractPathElements";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePostDeleteMutation = () => {
  const clubId = formatClubId();
  const postId = formatPostId();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: () => http.delete(`/clubs/${clubId}/posts/${postId}`),
    onSuccess: () => {
      alert("삭제되었습니다!");
      router.back();
      queryClient.invalidateQueries({
        queryKey: ["postList"],
      });
    },
  });
};
