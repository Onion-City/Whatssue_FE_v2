import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { ScheduleDetailContent, ScheduleDetailProp } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

export const useScheduleDetailQuery = ({ clubId, scheduleId }: ScheduleDetailProp) => {
    return useQuery<CommonNoPageRes<ScheduleDetailContent>>({
        queryKey: ['schedule', [clubId, scheduleId]],
        queryFn: async () => {
            const response = await http.get<CommonNoPageRes<ScheduleDetailContent>>(
                `/clubs/${clubId}/schedules/${scheduleId}`
            );
            return response;
        },
        staleTime: 1000,
    });
};