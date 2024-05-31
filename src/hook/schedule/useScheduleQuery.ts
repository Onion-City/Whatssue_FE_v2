import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { ScheduleContent } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

export interface FetchScheduleProps {
    clubId: number;
    q?: string;
    sDate?: string;
    eDate?: string;
}

export const useScheduleQuery = ({ clubId, q, sDate, eDate }: FetchScheduleProps) => {
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