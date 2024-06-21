import { http } from "@/apis/http";
import { useMutation } from "@tanstack/react-query";

export const useJoinCancelMutation = (joinRequestId: number) => {
  return useMutation({
    mutationFn: () => http.post(`/join/requests/${joinRequestId}/cancel`,``),
    onSuccess: (res) => {
      alert("삭제 성공");
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
