import { http } from "@/apis/http";
import { useQuery } from "@tanstack/react-query";
import { AttendanceMemberListItem } from "@/types/attendance/types";
import { ScheduleDetailProp } from "@/types/schedule";
import { CommonNoPageRes } from "@/types";

interface ddd {
  data: AttendanceMemberListItem[];
}

export const useAttendanceMemberListQuery = ({
  clubId,
  scheduleId,
}: ScheduleDetailProp) => {
  return useQuery<CommonNoPageRes<ddd>>({
    queryKey: ["attendanceList", clubId, scheduleId],
    queryFn: async () => {
      const response = await http.get<CommonNoPageRes<ddd>>(
        `/clubs/${clubId}/schedules/${scheduleId}/attendance-list`
      );
      console.log(response.data);
      return response;
    },
    staleTime: 1000,
  });
};
