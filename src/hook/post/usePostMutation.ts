import { http } from "@/apis/http";
import { formatClubId } from "@/utils/extractPathElements";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePostMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const clubId = formatClubId();
  return useMutation({
    mutationFn: (data: FormData) => http.post(`/clubs/${clubId}/posts`, data),
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
};
