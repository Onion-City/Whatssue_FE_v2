import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { JoinClub } from "@/types/clubjoin";
import { useQuery } from "@tanstack/react-query";

export const useJoinClubQuery = (privateCode: string) => {
  return useQuery<CommonNoPageRes<JoinClub>>({
    queryKey: ["JoinClub"],
    queryFn: async () =>
      await http.get<CommonNoPageRes<JoinClub>>(`/clubs?privateCode=${privateCode}`),
  });
};

export const fetchJoinClub = async (privateCode: string) => {
  const response = await http.get<CommonNoPageRes<JoinClub>>(`/clubs?privateCode=${privateCode}`);
  console.log(response);
  return response;
};