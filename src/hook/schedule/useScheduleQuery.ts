import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { FetchScheduleParams, ScheduleContent } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

// 일정 조회 (/clubs/{clubs}/schedules)
export const useScheduleQuery = ({ clubId, q, sDate, eDate }: FetchScheduleParams) => {
    return useQuery<CommonRes<ScheduleContent>>({
        queryKey: ['schedule', clubId, q, sDate, eDate],
        queryFn: async () => {
            const response = await http.get<CommonRes<ScheduleContent>>(
                `/clubs/${clubId}/schedules?q=${q}&sDate=${sDate}&eDate=${eDate}`
            );
            return response;
        },
        staleTime: 1000,
    });
};