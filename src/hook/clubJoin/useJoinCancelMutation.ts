import { http } from "@/apis/http";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useJoinCancelMutation = (joinRequestId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => http.post(`/clubs/join/${joinRequestId}/cancel`),
    onSuccess: (res) => {
      alert("취소 성공");
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
