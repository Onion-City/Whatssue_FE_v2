import { http } from "@/apis/http";
import { AttendanceInfo } from "@/types/attendance/types";
import { ScheduleDetailProp } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

export const useAttendanceStartQuery = ({
  clubId,
  scheduleId,
  enabled = true,
}: ScheduleDetailProp & { enabled?: boolean }) => {
  return useQuery<AttendanceInfo>({
    queryKey: [`attendanceStart`, { clubId, scheduleId }],
    queryFn: () =>
      http.get<AttendanceInfo>(
        `/${clubId}/schedules/${scheduleId}/attendance-start`,
        { headers: { accept: "*/*" } }
      ),
    enabled,
  });
};
