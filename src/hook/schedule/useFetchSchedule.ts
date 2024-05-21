import { http } from "@/apis/http";
import { useQuery } from "@tanstack/react-query";

interface FetchScheduleProps {
    clubId: number;
    q?: string;
    sDate?: string;
    eDate?: string;
}

interface FetchScheduleRes {
    scheduleId: number;
    scheduleName: string;
    scheduleDateTime: Date;
    attendanceStatus: string;
}

export const useFetchSchedule = async ({clubId, q, sDate, eDate}: FetchScheduleProps) => {
    return useQuery<FetchScheduleRes[]>({
        queryKey: ['schedule', clubId],
        queryFn: () => http.get<FetchScheduleRes[]>(`/clubs/${clubId}/schedules?q=${q}&sDate=${sDate}&eDate=${eDate}`),
        staleTime: 1000,
    })
}