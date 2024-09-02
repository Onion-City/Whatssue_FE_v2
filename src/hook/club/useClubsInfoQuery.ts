import { http } from "@/apis/http";
import { ClubInfoContent, ClubInfoParams } from "@/types/club";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

// 모임 정보 조회 (/clubs/{clubId}/info)
export const useClubsInfoQuery = ({ clubId }: ClubInfoParams) => {
  return useQuery<Promise<AxiosResponse<ClubInfoContent>>>({
    queryKey: ["clubInfo", [clubId]],
    queryFn: async () => {
      const response = await http.get<Promise<AxiosResponse<ClubInfoContent>>>(
        `/clubs/${clubId}/info`
      );
      return response;
    },
    staleTime: 1000,
  });
};
