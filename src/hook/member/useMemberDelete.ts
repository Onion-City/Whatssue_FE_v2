import { http } from "@/apis/http";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMemberDelete = (clubId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => http.delete(`/clubs/${clubId}/member/exile`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["clubMemberList", [clubId]],
      });
    },
  });
};
