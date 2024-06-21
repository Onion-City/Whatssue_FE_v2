import { http } from "@/apis/http";
import { JoinRequest } from "@/types/clubjoin";
import { useQuery } from "@tanstack/react-query";

export const useJoinRejectedQuery = (joinRequestId: number, status: string) => {
  return useQuery<JoinRequest>({
    queryKey: ["JoinRejected", joinRequestId],
    enabled: status === "REJECTED",
    queryFn: async () =>
      await http.get<JoinRequest>(`/join/requests/${joinRequestId}`, {
        headers: { accept: `*/*` },
      }),
  });
};
