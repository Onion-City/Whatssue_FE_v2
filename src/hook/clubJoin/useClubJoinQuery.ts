import { http } from "@/apis/http";
import { GetRequestedJoinListResponse } from "@/types/club";
import { useQuery } from "@tanstack/react-query";

export const useClubJoinQuery = () => {
  return useQuery<GetRequestedJoinListResponse>({
    queryKey: ["JoinRequest"],
    queryFn: () =>
      http.get<GetRequestedJoinListResponse>(`/join/requests`, {
        headers: { accept: `*/*` },
      }),
  });
};
