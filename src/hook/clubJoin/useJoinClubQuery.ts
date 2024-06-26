import { http } from "@/apis/http";
import { JoinClub } from "@/types/clubjoin";
import { useQuery } from "@tanstack/react-query";

export const useJoinClubQuery = (privateCode: string) => {
  return useQuery<JoinClub>({
    queryKey: ["JoinClub"],
    queryFn: () =>
      http.get<JoinClub>(`/join/club?privateCode=${privateCode}`, {
        headers: { accept: `*/*` },
      }),
  });
};
