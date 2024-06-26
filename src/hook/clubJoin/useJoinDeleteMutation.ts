import { http } from "@/apis/http";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// 모임가입 신청 삭제
export const useJoinDeleteMutation = (joinRequestId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => http.delete(`/clubs/join/${joinRequestId}`),
    onSuccess: (res) => {
      alert("삭제 성공");
      console.log(res);
      queryClient.invalidateQueries({
        queryKey: ["JoinRequest"], //신청 목록 재확인
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
