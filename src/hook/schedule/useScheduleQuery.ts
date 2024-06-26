import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { FetchScheduleParams, ScheduleContent } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

// 일정 조회 (/clubs/{clubs}/schedules)
export const useScheduleQuery = ({ 
    clubId, 
    keyword, 
    startDate, 
    endDate, 
    page,
    size,
    sort = "string",
}: FetchScheduleParams) => {
    return useQuery<CommonRes<ScheduleContent>>({
        queryKey: ['schedule', {clubId, keyword, startDate, endDate, page, size, sort}],
        queryFn: async () => {
            const response = await http.get<CommonRes<ScheduleContent>>(
                `/clubs/${clubId}/schedules?keyword=${keyword}&startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`
            );
            return response;
        },
        staleTime: 1000,
    });
};