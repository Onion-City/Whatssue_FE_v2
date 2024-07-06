import { http } from "@/apis/http";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePostMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const clubId = FormatClubId();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: (data: FormData) => http.post(`/clubs/${clubId}/posts`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postList"],
      });
      console.log("게시글 등록 성공");
      showToast({
        message: "게시글이 등록되었습니다.",
        type: "success",
      });
      router.back();
    },
    onError: (error) => {
      console.log("게시글 등록 실패", error);
      showToast({
        message: "게시글 등록 실패",
        type: "error",
      });
    },
  });
};
