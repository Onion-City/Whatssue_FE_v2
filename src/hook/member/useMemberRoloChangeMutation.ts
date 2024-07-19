import { http } from "@/apis/http";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface memberData {
  role: "MANAGER" | "MEMBER";
  memberId: number;
}
export function useMemberRoloChangeMutation(clubId: number) {
  const router = useRouter();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: memberData) =>
      http.patch(`/clubs/${clubId}/member/role/modify`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["clubMemberList", [clubId]],
      });
      console.log("권한 수정 성공");
      showToast({
        message: "권한 수정 성공",
        type: "success",
      });
      router.back();
    },
    onError: (error) => {
      console.log("권한 수정 실패", error);
      showToast({
        message: "권한 수정 실패",
        type: "error",
      });
    },
  });
}
