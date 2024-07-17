import { http } from "@/apis/http";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useMemberModifyMutation() {
  const router = useRouter();
  const clubId = FormatClubId();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData) =>
      http.post(`/clubs/${clubId}/member/profile/modify`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["clubMemberList", [clubId]],
      });
      console.log("프로필 수정 성공");
      showToast({
        message: "프로필 수정 성공",
        type: "success",
      });
    //   router.back();
    },
    onError: (error) => {
      console.log("프로필 수정 실패", error);
      showToast({
        message: "프로필 수정 실패",
        type: "error",
      });
    },
  });
}
