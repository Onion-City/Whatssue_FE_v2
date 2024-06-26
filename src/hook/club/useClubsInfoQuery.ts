import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { ClubInfoContent, ClubInfoParams } from "@/types/club";
import { useQuery } from "@tanstack/react-query";

// 모임 정보 조회 (/clubs/{clubId}/info)
export const useClubsInfoQuery = ({ clubId }: ClubInfoParams) => {
    return useQuery<CommonNoPageRes<ClubInfoContent>>({
        queryKey: ['clubInfo', [clubId]],
        queryFn: async () => {
            const response = await http.get<CommonNoPageRes<ClubInfoContent>>(
                `/clubs/${clubId}/info`
            );
            return response;
        },
        staleTime: 1000,
    });
};